import { render, screen } from "@testing-library/react";
import { debug } from "console";
import VaultReleaseModal from "./VaultReleaseModal";

const sampleRelease = {
  artist_name: "Lingero",
  end_date: "2021-10-01T00:00:00.000Z",
  playlist: ["Been Through", "Brightly", "Changed"],
  release_art:
    "https://bng-resources.s3.us-east-2.amazonaws.com/7/art/Trials%20And%20Errors.jpg",
  release_description:
    "This album consists of tracks inspired by modern hip hop and R&B. My music derives from the experiences and difficulties I have faced, and through my music, I hope to inspire others facing challenges in these unprecedented times.",
  release_id: 24,
  release_name: "Trials and Errors",
  start_date: "2021-09-17T00:00:00.000Z",
  social: "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
};


describe("Release content renders correctly in modal", () => {
  // beforeEach(() => {
  //   render(<VaultReleaseModal release={sampleRelease} isOpen={true} />);
  // });

  test("Release name renders correctly", () => {
    const {getByTestId} = render(<VaultReleaseModal release={sampleRelease} isOpen={true} />);
    expect(getByTestId("vault-release-name")).toBeInTheDocument();
    expect(getByTestId("vault-release-name").textContent).toBe("Trials and Errors");

    // expect(
    //   screen.getByRole("heading", { name: /trials and errors/i })
    // ).toBeInTheDocument();
  });

  test("Artist name is in the modal", () => {
    const {getByRole} = render(<VaultReleaseModal release={sampleRelease} isOpen={true} />);
    debug()
    expect(getByRole("heading", { name: /lingero/i })
    ).toBeInTheDocument();
  });

  test("track list shows", () => {
    const {getAllByRole} = render(<VaultReleaseModal release={sampleRelease} isOpen={true}/>);
    expect(getAllByRole("listitem").length).toBe(3);
  });

  test("release timeframe shows", () => {
    const {getByText} = render(<VaultReleaseModal release={sampleRelease} isOpen={true} />);
    expect(getByText(/9\/17\/2021 \- 10\/1\/2021/i)).toBeInTheDocument();
  });

  test("modal close button shows", () => {
    const {getByTestId} = render(<VaultReleaseModal release={sampleRelease} isOpen={true}/>);
    expect(getByTestId("modal-close-button")).toBeInTheDocument();
  });
});