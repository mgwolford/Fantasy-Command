const url =
  "https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLADP?adpType=halfPPR";

const options = {
  method: "GET",
  headers: {
		'x-rapidapi-key': '6cd48fe7a1msh1f3c53097813b4ap1b9a3ejsnc60c2812b902',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.',
    "Content-Type": "application/json",
  },
};

export async function getDraftProjections() {
  try {
    const response = await fetch(url, options);

    console.log("RAW RESPONSE:", response);

    const data = await response.json();

    console.log("API DATA:", data);

    return data.body.adpList;
  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}