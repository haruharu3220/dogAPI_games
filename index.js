//let url = `https://dog.ceo/api/breed/${breed}/images`;
const options = {
  method: "get",
};

var app = new Vue({
  el: "#app",
  data() {
    return {
      test: "これはテストです",
      dogImage: "",
      breeds: ["Affenpinscher", "Akita", "Boxer"],
      breed: "Akita",
    };
  },
  methods: {
    async getDogImage() {
      const response = await fetch(
        // `https://dog.ceo/api/breeds/list/all`,
        // `https://dog.ceo/api/breed/shiba/images/random`,
        `https://dog.ceo/api/breed/akita/images/random`,
        options
      ).then((response) => response.json());
      console.log(response);
      this.dogImage = response.message;
    },
  },
});
