const MainPageComponent = {
    template: '#mainPageTemplate'
};

const ProfileComponent = {
    template: '#profileTemplate'
};

const FriendsComponent = {
    template: '#friendsTemplate'
};

const SettingsComponent = {
    template: '#settingsTemplate',
    methods:{
        clickButton(){
            this.$refs.pictureUpload.click();
        },
        changeProfilPic(event){
            const file = event.target.files[0]; //Repräsentiert erste ausgewählte Datei mit [0], 
                                                //da es immer als Liste übergeben wird (auch wenns nur ein ist)
            if (file){
                this.$root.imgSrc = URL.createObjectURL(file); //Erstellt URL dazu, um Img im Browser anzuzeigen
            }
        }
        
    }
};

const SignOutComponent = {
    template: '#signOutTemplate'
};

let app = Vue.createApp({
    data() {
        return {
            currentComponent: "mainPage",
            showDropDown: false,
            imgSrc: "defaultUserIcon.webp"
        };
    },
    methods:{
        toggleDropDown(){
            this.showDropDown = !this.showDropDown;
        }
       /*,
        closeDropDown(){
            if(this.showDropDown){
                this.showDropDown = false;
            }
        }*/
    },
    components: {
        "mainPage": MainPageComponent,
        "profile" : ProfileComponent,
        "friends": FriendsComponent,
        "settings": SettingsComponent,
        "signOut": SignOutComponent
    }
});


app.mount("#app"); 