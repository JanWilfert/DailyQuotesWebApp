
        const MainPageComponent = {
            template: '#mainPage-template'
        };

        const ProfileComponent = {
            template: '#profile-template'
        };

        const FriendsComponent = {
            template: '#friends-template'
        };

        const SettingsComponent = {
            template: '#settings-template'
        };

        const SignOutComponent = {
            template: '#signOut-template'
        };

        let app = Vue.createApp({
            data() {
                return {
                    currentComponent: "mainPage",
                    showDropDown: false
                };
            },
            methods:{
                toggleDropDown(){
                    this.showDropDown = !this.showDropDown;
                }/*,
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