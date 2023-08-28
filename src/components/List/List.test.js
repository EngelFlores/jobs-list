import React from "react";
import { render } from "@testing-library/react";

import { List } from "./List"

test('Render List component', () => {
  const { container } = render(<List />)

  expect(container.childElementCount).toBeTruthy()

})

test( 'Check class on List component', () => {
  const {container} = render( <List /> );

  expect( container.children[0] ).toHaveClass( 'list' );

} );