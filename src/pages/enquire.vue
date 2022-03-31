<template>
  <q-page padding style="background-color: #eef2df">
    <div class="row">
      <div class="col-8 q-gutter-lg">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Anything</div>
            <hr />

            <div>
              <p>H. Lalbiaktluanga</p>
              <p>11th Jan 2022</p>
              <p>engpoh ti thei</p>
              <hr />
            </div>
            <br />
            <div>
              <hr />
              <p>Nursery, Aizawl</p>
              <p>Aizawl District</p>
              <p>PLEASE LOGIN TO APPLY</p>
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Question &amp; Clarifications</div>
            <hr />
            <q-input
              class="q-pt-sm"
              v-model="text"
              type="textarea"
              placeholder=""
              outlined
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 q-px-lg">
        <q-card
          ><div class="text-h6 q-pt-md q-pl-md">RELATED JOBS</div>
          <hr />
          <q-card-section v-for="job in myc" :key="job">
            <p class="text-green elipsis" style="font-size: 20px">
              {{ job.title }}
            </p>
            <p class="elipsis">{{ job.name }}</p>
            <p class="elipsis">{{ job.veng }}</p>

            <div class="row">
              <div class="col-6">
                <q-icon name="mdi-cash" size="30px" />
                &#8377; {{ job.salary }} per {{ job.options }}
              </div>
              <div class="btn col-6">
                <q-btn
                  color="amber-4"
                  class="text-lime-10"
                  icon="mdi-comment-question"
                  label="Enquire"
                  to="/enquire"
                />
              </div>
            </div>
            <hr />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
  <!-- mobile app -->
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
    const text = ref("");
    const myc = ref([
      {
        title: "Anything",
        name: "H. Lalbiaktluanga",
        veng: "Nursery, Aizawl",
        salary: "10",
        options: "month",
      },
      {
        title: "Sales Girl",
        name: "Vanlalruati",
        veng: "Chanmari, Aizawl",
        salary: "10",
        options: "month",
      },
      {
        title: "Sales Person(Gai Green Tea, Etc)",
        name: "Lalduatpuia",
        veng: "Dawrkawn, Aizawl",
        salary: "10",
        options: "month",
      },
      {
        title: "Scientific Administrative Assistant",
        name: "H. Lalbiaktluanga",
        veng: "Nursery, Aizawl",
        salary: "10",
        options: "month",
      },
    ]);
    return {
      text,
      myc,
    };
  },
};
</script>

<style>
.btn {
  text-align: right;
}
</style>
