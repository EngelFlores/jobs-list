import React from "react";
import { render, waitFor } from "@testing-library/react";

import { Row } from "./Row"

test("Render Row component", () => {
  const { container } = render(<Row />)

  expect(container.childElementCount).toBeTruthy()

})

test("Check class on Row component", () => {
  const { container } = render(<Row />);

  expect(container.children[0]).toHaveClass("row");

});

test('Render row component and check props', async () => {
  const id = 5
  const jobTitle = "Software Engineer"
  const employmentType = "Full-time"
  const url = "https://example.org/bottle.htm"
  const industry = "Education"
  const companyName = "Fish"
  const experience = "None"
  const locations = [{ location: { text: "Stockholm" } }, { location: { text: "Brazil" } }]
  const { container, getByTestId, getAllByTestId } = render(
    <Row
      key={id}
      jobTitle={jobTitle}
      employmentType={employmentType}
      url={url}
      industry={industry}
      companyName={companyName}
      experience={experience}
      locations={locations}
    ></Row>
  )

  const jobTitleElement = await waitFor( () => getByTestId( "job-title" ) );
  const companyNameElement = await waitFor( () => getByTestId( "company-name" ) );
  const employmentTypeElement = await waitFor( () => getByTestId( "employment-type" ) );
  const locationElement = await waitFor( () => getAllByTestId( "location" )[0] );
  const experienceElement = await waitFor( () => getByTestId( "experience" ) );
  const industryElement = await waitFor( () => getByTestId( "industry" ) );

  expect(container.childElementCount).toBeTruthy()
  expect( jobTitleElement ).toHaveTextContent( jobTitle );
  expect( companyNameElement ).toHaveTextContent( companyName );
  expect( employmentTypeElement ).toHaveTextContent( employmentType );
  expect( locationElement ).toHaveTextContent( locations[0].location.text );
  expect( experienceElement ).toHaveTextContent( experience );
  expect( industryElement ).toHaveTextContent( industry );
})