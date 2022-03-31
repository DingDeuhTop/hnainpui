<template>
  <q-page padding class="account-card" style="background-color: #eef2dfs">
    <div>
      <div class="row col-xs-12">
        <div class="col-sm-3 q-pr-sm">
          <q-card>
            <q-card-section
              ><q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar to="/account">
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
                ><q-item clickable v-ripple to="/verification">
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
        <div class="col-sm-9 q-pl-sm">
          <q-card>
            <q-card-section>
              <span>
                <div class="row">
                  <div class="col-6">
                    <p>Name</p>
                    <p>District</p>
                  </div>
                  <div class="col-6 man" style="max-width: 10%">
                    <q-img src="~/assets/man.png" />
                  </div>
                </div>

                <hr />

                <div>
                  <p>MY CATEGORIES</p>
                  <!-- <li>Programmer @ &#8377;0.00per</li> -->
                </div>

                <hr />
                <div class="row q-pt-xl">
                  <p class="col-4">Jobs Applied</p>
                  <p class="col-4">Job Enquired</p>
                  <p class="col-4">Jobs Posted</p>
                </div>
              </span>
            </q-card-section>
          </q-card>
        </div>
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
    const text = ref();
    return {
      text,
    };
  },
};
</script>

<style>
.account-card {
  min-height: 733px;
  align-items: flex-start;
  margin: auto;
  background-color: #eef2df;
}
.man {
  max-width: 100px;
  text-align: right;
  margin: 0 1px 0 auto;
}
</style>
