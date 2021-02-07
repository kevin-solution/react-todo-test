import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";

import TodoItem from '../index';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem></TodoItem>, div);
})

it("render todo-item correctly", () => {
    const { getByTestId } = render(<TodoItem label="todo" />);
    expect(getByTestId('todo-item')).toHaveTextContent('todo');
})