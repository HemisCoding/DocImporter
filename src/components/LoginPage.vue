
  <template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="12" sm="10">
              <v-card class="elevation-6 mt-10"  >
               <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Login in to Your Account</h4>
                          <h6
                            class="text-center  grey--text "
                          >Log in to your account so you can continue builiding <br>and editing your onboarding flows</h6>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                              <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Email"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-16"
                             required
                            />
                            <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            required
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="Remember Me"
                        class="mt-n1"
                        color="blue"
                      > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">Forgot password</span>
                              </v-col>
                            </v-row>
                          <v-btn color="blue" dark block tile @click="submit()">Log in</v-btn>
                              </v-form>
                          <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Don't Have an Account Yet?</h3>
                        <h6
                          class="text-center"
                        >Let's get you all set up so you can start creating your your first<br>  onboarding experience</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Alredy Signed up?</h3>
                        <h6
                          class="text-center"
                        >Log in to your account so you can continue building and<br>  editing your onboarding flows</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Sign Up for an Account</h4>
                        <h6
                          class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                        first onboarding experiance</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           <v-row>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="First Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           required
                          />
                           </v-col>
                           <v-col cols="12" sm="6">
                            <v-text-field
                            label="Last Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-4"
                            required
                          />
                           </v-col>
                           </v-row>
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            required
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            required
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                       
                        label="I Accept AAE"
                        class="mt-n1"
                        color="blue"
                        > </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text ml-n4">Terms &Conditions</span>
                              </v-col>
                            </v-row>
                          <v-btn color="blue" dark block tile>Sign up</v-btn>
                     
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Sign up using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn>
                         </div>
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>

// import axios from 'axios';
  

  export default {
    data() {
      return {
        step: 1,
        email: "",
        password: "",
        valid: false,
        emailRules: [
          (v) => !!v || "E-mail is required",
          (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        passwordRules: [(v) => !!v || "Password is required"],
      };
    },

  props: {
    source: String
  },
  methods: {
    async submit() {
      if (this.$route.path !== '/home') {
      this.$router.push('/home');
    } else {
      alert('Already on the home page');
    }


        // if (this.$refs.form.validate()) {
        //   // Perform login logic here
        //   try {
        //     const response = await axios.post("", {
        //         email: this.email,
        //         password: this.password
        //     });
        //     console.log("login data", response.data)
        //     alert("Logged in succesfully");

        //     this.$router.push('home');
        //   } catch (error) {

        //     console.error("Login failed: ", error)
        //     alert("Login failed! Please check the login credentials or register.")
        //   }

        // }
      },
  },

    
  }
</script>
<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>
