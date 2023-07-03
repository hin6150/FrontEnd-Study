import axios from "axios";

export const getDatas = async (params) => {
  try {
    const response = await axios.get(
      "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson",
      params
    );
    return response.data.response.body.items.item;
  } catch (e) {
    console.log("실패", e);
  }
};
