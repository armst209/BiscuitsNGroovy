import MusicShowcase from "../MusicShowcaseIndex.section";

import { render, screen, fireEvent } from "@testing-library/react";

import userEvent from "@testing-library/user-event"

//components 
//MusicShowcase
//MusicShowcaseList


//test cases
//null cases
//isLoading true or false - local variable
//error message true or false
//music showcase list is visible
//fetch data

describe("Music Showcase Component", () => {

    test("isLoading is true, renders Component Loading", () => {
        //Arrange
        render(<MusicShowcase />)
        //Act

        //Assert
        const musicShowcaseGrid = screen.getByTestId("music-showcase-grid");

        expect(musicShowcaseGrid).toContainHTML('svg');



    })


    // test("isLoading is false, does NOT render Component Loading",()=>{

    // })

    //  test("fetch success returns an array", async ()=>{
    //     //Arrange
    //     window.fetch = jest.fn();

    //     window.fetch.mockResolvedValueOnce({
    //     releases:[
    //         {album_ep_or_single: 2,
    //         art_url: "https://bng-resources.s3.us-east-2.amazonaws.com/3/art/drake.png",
    //         description: "Test Live",
    //         end_date: "2022-02-15T00:00:00.000Z",
    //         id: 33,
    //         name: "drake",
    //         price: 2,
    //         purchased: 0,
    //         songs: ['Test Song'],
    //         start_date: "2022-01-30T00:00:00.000Z",
    //         title: "Test Jan 31"}]
    //     });

    //     render(<MusicShowcase/>)
    //     //Act

    //     //Assert


    //     //  expect(releaseCards).not.toHaveLength(0);
    //  })

})