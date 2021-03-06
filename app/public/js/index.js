   
const Offer = {
    data() {
      return {
        "person": {},
        "offers": [
                {
                    "id": 1,
                    "name": "Jane Student",
                    "offer": 100000,
                    "bonus": 9000,
                    "company": "EY",
                    "offerDate": "2021-10-05"
                },
                {
                    "id": 2,
                    "name": "Jordan Student",
                    "offer": 87000,
                    "bonus": 3000,
                    "company": "IU",
                    "offerDate": "2021-09-25"
                }
            ]
        }
    },
    computed: {
    },
    methods: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY');
        },
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.person = parsedJson.results[0];
                this.UserPic = parsedJson.picture.large;
                this.UserPicThumb = parsedJson.picture.thumbnail;
                console.log("C");
            })
            .catch( err => {
                console.error(err)
            })

            console.log("B");
        }
    },
    created() {
        this.fetchUserData();
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');