export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
    responseSchema: {
      type: "object",
      description: "",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              
              persentage: {
                type: "number",
                description: ""
              },
              matched_content: {
                type: "string",
                description: ""
              },
              unique_content: {
                type: "string",
                description: ""
              },
              sources: {
                type: "string",
                description: ""
              },
              recommendations: {
                type: "string",
                description: ""
              },
              methods: {
                type: "string",
                description: ""
              }

            }
          }
        }
      }
    },
  };