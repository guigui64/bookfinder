import { mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import BookCard from './components/book-card';
import SearchBox from './components/searchbox';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe('Books', () => {
	beforeEach(() => fetch.resetMocks());

	it('displays no book at first', () => {
		const wrapper = mount(<App />);
		const SearchBoxComponent = wrapper.find(SearchBox);
		expect(SearchBoxComponent).toBeDefined();
		const input = wrapper.find('input[type="search"]').getDOMNode();
		expect(input).toBeDefined();
		expect(input.value).toBe('');
		const BookCardComponents = wrapper.find(BookCard);
		expect(BookCardComponents.exists()).toBe(false);
		expect(wrapper).toMatchSnapshot();
	});

	it('displays books after a search', async () => {
		let items = [];
		for (let i = 0; i < 10; i++) {
			items.push({
				volumeInfo: {
					title: `title-${i}`,
					authors: [`author-${i}`],
					publisher: `publisher-${i}`,
					imageLinks: {
						thumbnail: `thumbnail-${i}`
					}
				}
			});
		}
		fetch.mockResponseOnce(
			JSON.stringify({
				items,
				totalItems: 10
			})
		);
		const wrapper = mount(<App />);
		const input = wrapper.find('input[type="search"]');
		act(() => {
			input.simulate('change', { target: { value: 'harry potter' } });
		});
		const button = wrapper.find('button').first();
		expect(button.getDOMNode().disabled).toBe(false);
		await act(async () => {
			await button.simulate('click');
		});
		expect(fetch.mock.calls.length).toBe(1);
		expect(fetch.mock.calls[0][0]).toBe(
			'https://www.googleapis.com/books/v1/volumes?q={harry potter}&langRestrict=en&orderBy=newest'
		);
		wrapper.update();
		const BookCardComponents = wrapper.find(BookCard);
		expect(BookCardComponents.length).toBe(10);
		for (let i = 0; i < 10; i++) {
			expect(BookCardComponents.at(i).prop('title')).toBe(`title-${i}`);
			expect(BookCardComponents.at(i).prop('author')).toBe(`author-${i}`);
			expect(BookCardComponents.at(i).prop('publisher')).toBe(`publisher-${i}`);
			expect(BookCardComponents.at(i).prop('imgSrc')).toBe(`thumbnail-${i}`);
		}
		expect(wrapper).toMatchSnapshot();
	});

	it('no result found', async () => {
		fetch.mockResponseOnce(
			JSON.stringify({
				totalItems: 0
			})
		);
		const wrapper = mount(<App />);
		const input = wrapper.find('input[type="search"]');
		act(() => {
			input.simulate('change', { target: { value: 'harry potter' } });
		});
		const button = wrapper.find('button').first();
		await act(async () => {
			await button.simulate('click');
		});
		wrapper.update();
		const BookCardComponents = wrapper.find(BookCard);
		expect(BookCardComponents.length).toBe(0);
		expect(wrapper.text().includes('Sorry, no result.')).toBe(true);
		expect(wrapper).toMatchSnapshot();
	});
});
