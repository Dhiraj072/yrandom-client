import * as services from "./services";
import mockAxios from 'axios';

jest.mock('axios');

it("correctly calls the API to get random video", () => {
    mockAxios.get.mockResolvedValue({id : test});
    services.getRandomVideo()
    .then((res) => {
        expect(res.data.id).toEqual("test");
        expect(mockAxios.get)
        .toHaveBeenCalledWith("https://yrandom-api-gateway.dappsr.com/yrandom/video/random");
    });
})

it("should correctly handle an API error", () => {
    mockAxios.get.mockResolvedValue(new Error("Request failed"));
    services.getRandomVideo()
    .then((res) => {
        expect(res.data).toEqual("Request failed");
    });
})