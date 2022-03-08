import React from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { render, cleanup, fireEvent } from "@testing-library/react"
import ReactDOM from "react-dom"

import VaultCard from "./VaultCard";

const sampleRelease = {
  artist_id: 3,
  artist_name: "drake",
  end_date: "2000-01-01T00:00:00.000Z",
  playlist: ["Passionfruit", "Nice For What (feat. Drake)"],
  release_art: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake-cover-photo.jpg",
  release_description: "the greatest hits ever",
  release_id: 6,
  release_name: "more music",
  start_date: "2000-01-01T00:00:00.000Z",
}

const toggleModalState = jest.fn();

const MockComponent = () => {
  return <Router>
    <VaultCard release={sampleRelease} toggleModalState={toggleModalState} />
  </Router>
}

// TODO May have to change the portal test due to React-Modal .. implementation
// beforeEach(()=>{
//   let portalRoot = document.getElementById("modal-overlay-root");
//   if(!portalRoot){
//     portalRoot = document.createElement("div");
//     portalRoot.setAttribute("id", "modal-overlay-root");
//     document.body.appendChild(portalRoot)
//   }
// })
beforeEach(() => {
  ReactDOM.findDOMNode()
})

afterEach(cleanup)

describe("Vault Card", () => {
  test("Body locks on modal open", () => {
    // Arrange
    const { getByTestId } = render(<MockComponent />);

    // Act
    const release = getByTestId("vault-release");
    fireEvent.click(release);

    // Assert
    expect(document.body.style.overflow).toBe("hidden");

    //Act
    const closeButton = getByTestId("modal-close-button");
    fireEvent.click(closeButton);

    //Assert
    expect(document.body.style.overflow).toBe("scroll");
  })
});

