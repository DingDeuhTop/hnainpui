<template>
  <q-page>
    <div>
      <!-- subheader -->
      <div class="row q-pb-xl" style="background-color: rgba(238, 242, 223, 1)">
        <div class="col q-pl-xl" v-if="$q.screen.gt.sm">
          <q-avatar size="250px">
            <q-img src="../assets/4.png" />
          </q-avatar>
        </div>
        <div class="col hna">
          <h4>Hna zawnawlna</h4>
          <p>
            Thalai hna zawng mek te tan, awlsam takin i hnathawh thiam zawng te
            zawng hmu zung zung rawh le.
          </p>
        </div>
      </div>

      <!-- search button -->

      <q-card class="q-px-md searchbtn"
        ><div class="row">
          <div class="col-7">
            <q-input
              borderless
              v-model="text"
              type="text"
              placeholder="Search"
            />
          </div>

          <div class="col-4">
            <q-select
              v-model="drpdown"
              :options="drpdownoptions"
              label="Search For"
              borderless
            />
          </div>
          <div class="q-mt-sm col-1">
            <q-btn flat round color="primary" icon="search" />
          </div>
        </div>
      </q-card>

      <!-- download mobile app  -->
      <div class="row" v-if="$q.screen.gt.xs">
        <div
          class="col-xs-12 col-sm-12 col-ms-6 col-lg-6 col-xl-6 q-pl-md text-center"
        >
          <h4>DOWNLOAD MOBILE APP</h4>
          <p>
            Please download our mobile app to use this portal easier and more
            efficiently.(iOS app coming soon)
          </p>
          <img
            src="../assets/google-play-badge.png"
            class="q-pr-sm"
            style="height: 40px; width: 120px"
          />

          <img src="../assets/appstore-badge.svg" />
        </div>
        <div
          class="col-xs-12 col-sm-12 col-ms-6 col-lg-6 col-xl-6 q-pt-sm q-pb-sm img"
        >
          <img src="../assets/downloadapp.png" />
        </div>
      </div>
      <!-- category table -->
      <h5 class="flex flex-center">PROFESSIONAL BY CATEGORY</h5>
      <div class="row">
        <div
          v-for="title in cards"
          :key="title"
          class="col-xs-4 col-sm-3 col-md-3 col-lg-2 col-xl-2 q-px-md q-pb-sm"
        >
          <q-card square class="text-center q-py-xl q-my-md" @click="toprof">
            <q-card-section>
              <q-icon :color="title.color" :name="title.icon" size="50px" />
              <div class="ellipsis">
                {{ title.name }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <!-- latest job -->
      <h5 style="text-align: center">Latest Job</h5>
      <div class="row">
        <div class="col-xs-12 col-md-6" v-if="$q.screen.gt.sm">
          <q-img src="~/assets/latestjob.png" />
        </div>

        <div class="col-xs-12 col-sm-12 col-md-6">
          <div class="row">
            <div
              class="col-xs-6 col-sm-6 col-md-6 q-pa-sm"
              v-for="latest in latestjob"
              :key="latest"
            >
              <q-card class="my-card">
                <q-card-section>
                  <p>{{ latest.header }}</p>
                  <p>{{ latest.title }}</p>
                  <div class="row">
                    <div class="col-6">
                      <q-icon class="q-pl-sm" size="30px" name="mdi-cash" />
                      &#x20b9; {{ latest.amount }}
                    </div>
                    <div class="view col-6">
                      <q-btn
                        flat
                        class="text-green"
                        :label="latest.name"
                        to="/enquire"
                      />
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>

          <div style="text-align: center">
            <q-btn outline flat label="Browse all jobs" to="job" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
  <!-- start your career -->
  <div class="footer row">
    <div class="col-xs-6 col-sm-3 q-pl-xl" style="text-align: left">
      <h4>
        START YOUR CAREER
        <p class="text-yellow">TODAY</p>
      </h4>
    </div>
    <div class="col-xs-6 col-sm-3">
      <h4 style="font: strong">
        <q-avatar size="40px">
          <q-img src="../assets/profe.png" />
        </q-avatar>
        2127
        <p class="text">Professionals registered</p>
      </h4>
    </div>
    <div class="col-xs-6 col-sm-3">
      <h4>
        <q-avatar size="40px">
          <q-img src="../assets/job.png" />
        </q-avatar>
        994
        <p class="text">Jobs Listed</p>
      </h4>
    </div>
    <div class="col-xs-6 col-sm-3">
      <h4>
        <q-avatar size="40px">
          <q-img src="../assets/engagement.png" />
        </q-avatar>
        2782
        <p class="text">Engagements</p>
      </h4>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    // const toprof = () => {
    //   window.location.href = "http://localhost:8080/professional";
    // };
    const cards = ref([
      {
        color: "blue",
        icon: "computer",
        name: "Computer Professional",
      },
      {
        color: "blue",
        icon: "mdi-weight-lifter",
        name: "Health & Fitness",
      },
      {
        color: "blue",
        icon: "mdi-album",
        name: "Music",
      },
      {
        color: "blue",
        icon: "mdi-camera",
        name: "Photography",
      },
      {
        color: "blue",
        icon: "mdi-exit-run",
        name: "Household Service",
      },
      {
        color: "blue",
        icon: "carpenter",
        name: "Mistiri",
      },
      {
        color: "blue",
        icon: "mail",
        name: "Delivery",
      },
      {
        color: "blue",
        icon: "construction",
        name: "Manual Labour",
      },
      {
        color: "blue",
        icon: "person",
        name: "Finance",
      },
      {
        color: "blue",
        icon: "person",
        name: "Office staff",
      },
      {
        color: "blue",
        icon: "balance",
        name: "Law, Public Safety and Security",
      },
      {
        color: "blue",
        icon: "person",
        name: "Sales",
      },
      {
        color: "blue",
        icon: "mdi-car",
        name: "Driver",
      },
      {
        color: "blue",
        icon: "engineering",
        name: "Engineer",
      },
      {
        color: "blue",
        icon: "medication",
        name: "Hospitality & Tourism",
      },
      {
        color: "blue",
        icon: "mdi-paw",
        name: "Pet Care",
      },
      {
        color: "blue",
        icon: "mdi-tshirt-crew",
        name: "Tailor",
      },
      {
        color: "blue",
        icon: "mdi-school-outline",
        name: "Education",
      },
      {
        color: "blue",
        icon: "poll",
        name: "Management",
      },
      {
        color: "blue",
        icon: "brush",
        name: "Beauty Salon",
      },
      {
        color: "blue",
        icon: "medication",
        name: "Medical",
      },
      {
        color: "blue",
        icon: "plumbing",
        name: "Fix & Repair",
      },
      {
        color: "blue",
        icon: "videocam",
        name: "Videography",
      },
      {
        color: "blue",
        icon: "person",
        name: "Professional",
      },
    ]);
    const latestjob = ref([
      {
        header: "Sales Girl",
        title: "Scooty nei/Khalh thiam",
        amount: "200",
        name: "view detail",
      },
      {
        header: "Sales Girl",
        title: "Scooty nei/Khalh thiam",
        amount: "200",
        name: "view detail",
      },
      {
        header: "Sales Girl",
        title: "Scooty nei/Khalh thiam",
        amount: "200",
        name: "view detail",
      },
      {
        header: "Sales Girl",
        title: "Scooty nei/Khalh thiam",
        amount: "200",
        name: "view detail",
      },
    ]);
    const text = ref("");
    const model = ref(null);
    const options = ref(["Jobs", "Professional"]);
    const drpdown = ref(null);
    const drpdownoptions = ref(["Job", "Professional"]);
    const onItemClick = ref(null);
    const router = useRouter();
    // const logo = () => {
    //   window.location.href = "http://localhost:8080/home";
    // };
    return {
      toprof() {
        router.push("/professional");
      },
      // toprof,
      cards,
      latestjob,
      text,
      model,
      options,
      drpdown,
      drpdownoptions,
      onItemClick,
    };
  },
};
</script>

<style>
.my-card {
  border-radius: 10px;
}
.view {
  text-align: right;
}
.footer {
  background-color: #89c16b;
  text-align: center;
  color: white;
}

.text {
  font-size: 20px;
}
.hna {
  text-align: center;
}
.searchbtn {
  max-width: 600px;
  margin: -27px auto;
}
</style>
