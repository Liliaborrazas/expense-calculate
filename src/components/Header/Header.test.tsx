import {render, fireEvent} from '@testing-library/react'
import Header from './Header';


const mockFn = jest.fn();


test('renders a message', () => {
    const {getByText, debug} = render(<Header onClickFn={mockFn} title="hola" />)

    const headerNode = getByText('hola');
    expect(headerNode.nodeName).toBe('NAV')
    expect(mockFn).not.toHaveBeenCalled();
    fireEvent.click(headerNode)
    expect(mockFn).toHaveBeenCalledTimes(2)
})