
import { renderHook, act } from "@testing-library/react-hooks";
import useModal from "../useModal";

describe("useModal Custom Hook", () => {

    test("default of isModalShowing will be false", () => {
        //Arrange
        const { result } = renderHook(() => useModal());
        //Act

        //Assert
        expect(result.current.isModalShowing).toBe(false);
    })

    test("when toggleModal is invoked, isModalShowing will be true", () => {
        //Arrange
        const { result } = renderHook(() => useModal());

        //Act
        act(() => { result.current.toggleModal() })

        //Assert
        expect(result.current.isModalShowing).toBe(true);

    })

})