export async function fetchNFLNews() {
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const result = await response.json();
  
      console.log("NFL NEWS:", result);
  
      return result.body || [];
    } catch (error) {
      console.error("NFL API Error:", error);
  
      return [];
    }
  }