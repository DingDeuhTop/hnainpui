<template>
  <q-page padding class="verification">
    <div class="row">
      <div class="col-sm-3 q-pr-sm">
        <q-card square>
          <q-card-section
            ><q-list>
              <q-item clickable v-ripple to="/account">
                <q-item-section avatar>
                  <q-icon name="mdi-home" />
                </q-item-section>
                <q-item-section>ACCOUNT HOME</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-account-group" />
                </q-item-section>
                <q-item-section>ENGAGED PROFESSIONALS</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-clipboard-list-outline" />
                </q-item-section>
                <q-item-section>MY CURRENT WORKS</q-item-section> </q-item
              ><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-format-list-bulleted" />
                </q-item-section>
                <q-item-section>MY JOB POSTINGS</q-item-section> </q-item
              ><q-separator /><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-account-cog" />
                </q-item-section>
                <q-item-section>ACCOUNT SETTINGS</q-item-section> </q-item
              ><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-playlist-check" />
                </q-item-section>
                <q-item-section>SKILL CATEGORIES</q-item-section> </q-item
              ><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-certificate-outline" />
                </q-item-section>
                <q-item-section>QUALIFICATIONS</q-item-section> </q-item
              ><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-check-all" />
                </q-item-section>
                <q-item-section>VERIFICATIONS</q-item-section> </q-item
              ><q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="mdi-logout-variant" />
                </q-item-section>
                <q-item-section>LOG OUT</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pl-md">
        <q-card>
          <q-card-section>
            <h6>Verifications</h6>
            <p>Phone Number Verification</p>
            <div>
              <q-card style="background-color: #009688; color: white">
                <q-card-section>
                  <q-icon name="mdi-check" />
                  Phone Number Verified
                </q-card-section>
              </q-card>
            </div>
            <p>Address Verification</p>
            <div class="q-pa-sm" style="border: solid blue 1px; color: blue">
              <q-icon name="mdi-information" />

              You can click verify address button and upload your address proof
              by clicking mark. It will be verified bt the admins. The following
              documents are accepted as address proof

              <li>Ration Card</li>
              <li>ETC</li>
            </div>
            <q-btn
              class="q-mt-sm"
              disable
              color="primary"
              icon="mdi-map"
              label="Verify address"
            />
            <div>
              <p class="q-mt-sm">Email verification</p>
              <q-card style="background-color: #1e88e5; color: white">
                <q-card-section>
                  Once you click verify email button, you will receive an email.
                  Please check your spam folder it nor received in in box.
                  Follow the instruction received to verify your email
                </q-card-section>
              </q-card>
            </div>
            <div class="row q-pt-sm">
              <div class="col-10">
                <q-input
                  v-model="text"
                  outlined
                  dense
                  type="text"
                  label="Your Email"
                />
              </div>
              <div class="col-2 q-pl-sm" style="text-align: right">
                <q-btn
                  color="primary"
                  icon="mdi-email"
                  disable
                  label="Verify email"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
  <div class="row q-pl-lg flex flex-center" v-if="$q.screen.gt.sm">
    <div class="col-6">
      <h4 style="text-strong">DOWNLOAD MOBILE APP</h4>
      <p>
        Please download Our mobile app to use this portal easier and more
        efficiently.
      </p>

      <q-img
        src="../assets/google-play-badge.png"
        style="height: 30px; width: 120px; border-radius: 10px"
      />
      <q-img
        src="../assets/appstore-badge.svg"
        style="height: 30px; width: 120px; border-radius: 10px"
      />
      <p style="color: #b71c1c" class="q-pt-md">
        Coming soon to App Store for iOS users
      </p>
    </div>
    <div class="col-6">
      <q-img src="../assets/downloadapp.png" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const text = ref(null);
    return {
      text,
    };
  },
};
</script>
<style>
.verification {
  min-width: none;
  align-items: flex-start;
  margin: auto;
  background-color: #eef2df;
}
</style>
