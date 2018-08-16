export default {
  title: "Home",
  sections: {
    symbols: {
      title: "Financial assets",
      table: {
        empty: "No data",
        head: {
          name: "Name",
          currency: "Currency",
          risk: "Risk",
          comments: "Comments"
        }
      },
      filters: {
        title: "Filters:"
      }
    }
  },
  aside: {
    symbols: {
      details: "Details:",
      detail: {
        isin: "ISIN",
        currency: "Currency",
        issuer: "Issuer",
        region: "Region",
        risk: "Risk",
        sector: "Sector",
        price: "Price"
      }
    }
  },
  comments: {
    title: "Comments:",
    button: {
      create: "New comment",
      update: "Update",
      remove: "Remove"
    },
    placeholder: "Write something..."
  }
};
