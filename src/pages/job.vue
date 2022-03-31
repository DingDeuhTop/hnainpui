<template>
  <q-page padding class="job">
    <div class="row">
      <div
        class="col-xs-2 col-sm-3 q-pt-md q-pl-md q-pr-md"
        v-if="$q.screen.gt.sm"
      >
        <q-card class="my-card text-center">
          <q-card-section>
            FILTER BY CATEGORIES
            <q-btn color="primary" label="Clear" />
            <q-separator inset horizontal class="q-mt-sm" />

            <q-expansion-item class="text-left" label="Computer Professional">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="compoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Health &amp; Fitness">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="healthoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Music">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="musicoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Photography">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="photographyoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Household Services">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="householdoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Mistiri">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="mistirioptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Delivery">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="deliveryoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Manual Labour">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="labouroptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Office Staff">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="officeoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Music">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="musicoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              label="Law, Public Safety and Security"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="lawoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Sales">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="saleoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Driver">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="driveroptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Engineer">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="engineeroptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              label="Hospitality &amp; Tourism"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="hospitalityoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Pet Care">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="petoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Tailor">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="tailoroptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Education">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="educationoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Management">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="managementoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Beauty Salon">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="beautyoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Medical">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="medicaloptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Fix &amp; Repair">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="fixoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Videography">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="videoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" label="Professional">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="professionaloptions"
              />
            </q-expansion-item>
            <q-separator />
            <div style="text-align: left">
              <p>Type</p>
              <q-radio v-model="shape" val="contract" label="Contract" />
              <q-radio v-model="shape" val="fulltime" label="Full Time" />
            </div>
            <q-separator />
            <div style="text-align: left">
              <q-radio v-model="shape" val="mizoram" label="Mizoram" />
              <q-radio v-model="shape1" val="india" label="India" />
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-9">
        <!-- job -->
        <div class="col-12">
          <div class="row">
            <div class="q-pa-md col-6" v-for="job in myc" :key="job">
              <q-card>
                <q-card-section>
                  <p class="text-green ellipsis" style="font-size: 20px">
                    {{ job.title }}
                  </p>
                  <p class="ellipsis">{{ job.name }}</p>
                  <p class="ellipsis">{{ job.veng }}</p>
                  <q-separator />
                  <div class="row q-pt-sm">
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
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div> </q-page
  ><!-- mobile app -->
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
    const group = ref([""]);
    const compoptions = ref([
      {
        label: "Graphic Designing",
        value: "graphic desinging",
      },
      {
        label: "Video Editing",
        value: "video editing",
      },
      {
        label: "Computer Typing",
        value: "computer typng",
      },
      {
        label: "Printing",
        value: "printing",
      },
      {
        label: "Programemr",
        value: "programmer",
      },
      {
        label: "Computer Operator",
        value: "computer operator",
      },
    ]);
    const healthoptions = ref([
      {
        label: "Massage Therapy",
        value: "massage therapy",
      },
      {
        label: "Fitness Instructor",
        value: "fitness instructor",
      },
      {
        lable: "Nursing Care",
        value: "nursing care",
      },
      {
        label: "Home Blood Collection",
        value: "home blood collection",
      },
    ]);
    const musicoptions = ref([
      {
        label: "Recording studio",
        value: "recording studio",
      },
      {
        label: "Music Track",
        value: "music track",
      },
    ]);
    const photographyoptions = ref([
      {
        label: "Wedding Photography",
        value: "wedding photography",
      },
      {
        label: "Event Photography",
        value: "event photography",
      },
      {
        label: "Portrait Photography",
        value: "potrait photography",
      },
    ]);
    const householdoptions = ref([
      {
        label: "Refrigerator",
        value: "refrigerator",
      },
      {
        label: "Tv",
        value: "tv",
      },
      {
        label: "Tuizem Chhe Siam",
        value: "tuizem chhe siam",
      },
      {
        label: "Computer",
        value: "computer",
      },
      {
        label: "Water Filter",
        value: "water filter",
      },
      {
        label: "Air Conditioner",
        value: "air conditioner",
      },
      {
        label: "Plumber",
        value: "plumber",
      },
      {
        label: "Electrician",
        value: "electrician",
      },
      {
        label: "Washing Machine",
        value: "washing machine",
      },
      {
        lable: "Nauawm",
        value: "nauawm",
      },
      {
        label: "Maid Service",
        value: "maid service",
      },
    ]);
    const mistirioptions = ref([
      {
        label: "Lung Mistiri",
        value: "lung mistiri",
      },
      {
        label: "Vinyl Flooring",
        value: "vinyl flooring",
      },
      {
        label: "Thing Mistiri",
        value: "thing mistiri",
      },
      {
        label: "Cement Mistiri",
        value: "cement mistiri",
      },
      {
        label: "Rawng Mistiri",
        value: "rawng mistiri",
      },
      {
        label: "Floor Tile Phah",
        value: "floor tile phah",
      },
    ]);
    const deliveryoptions = ref([
      {
        label: "Delivery",
        value: "delivery",
      },
      {
        label: "Tui Sem",
        value: "tui sem",
      },
    ]);
    const labouroptions = ref([
      {
        label: "Labour",
        value: "labour",
      },
      {
        label: "Huan Sam",
        value: "huan sam",
      },
    ]);
    const financeoptions = ref([
      {
        label: "Insuarnce Sale Agent",
        value: "insurance sale agent",
      },
      {
        label: "Bank Teller",
        value: "bank teller",
      },
      {
        label: "Loan Officer",
        value: "loan officer",
      },
      {
        lable: "Accountant",
        value: "accountant",
      },
      {
        label: "Finance Advisor",
        value: "finance advisor",
      },
    ]);
    const officeoptions = ref([
      {
        label: "Peon",
        value: "peon",
      },
      {
        label: "Office Assistant",
        value: "office assistant",
      },
    ]);
    const lawoptions = ref([
      {
        label: "Lawyer",
        value: "lawyer",
      },
      {
        label: "Lifeguard",
        value: "lifeguard",
      },
      {
        label: "Paralegal",
        value: "paralegal",
      },
      {
        label: "Security Guard",
        value: "security guard",
      },
    ]);
    const saleoptions = ref([
      {
        label: "Sales Person",
        value: "sales person",
      },
      {
        label: "Sales Manager",
        value: "sales manager",
      },
    ]);
    const driveroptions = ref([
      {
        label: "Heavy Goods Motor Vehicle",
        value: "heavy goods motor vehicle",
      },
      {
        lable: "Heavy Passenger Motor Vehicle",
        value: "heavy passenger motor vehicle",
      },
      {
        label: "Excavator",
        value: "excavator",
      },
      {
        label: "Bull Dozer",
        value: "bull dozer",
      },
      {
        label: "LMV-Non Transport",
        value: "lmv-non transport",
      },
      {
        label: "LMV-Transport",
        value: "lmv-transport",
      },
    ]);
    const engineeroptions = ref([
      {
        label: "Civil Engineer",
        value: "civil engineer",
      },
      {
        label: "Mechanical Engineer",
        value: "mechanical engineer",
      },
      {
        label: "Electrical Engineer",
        value: "electrical engineer",
      },
      {
        label: "Computer Engineer",
        value: "computer engineer",
      },
      {
        label: "Automobile Engineer",
        value: "automobile engineer",
      },
      {
        label: "Chemical Engineer",
        value: "chemical engineer",
      },
    ]);
    const hospitalityoptions = ref([
      {
        label: "Cook",
        value: "cook",
      },
      {
        label: "Baker",
        value: "baker",
      },
      {
        label: "Chef",
        value: "chef",
      },
      {
        label: "Dishwasher",
        value: "dishwasher",
      },
      {
        label: "Waiter/Waitress",
        value: "waiter/waitress",
      },
      {
        label: "Catering",
        value: "catering",
      },
    ]);
    const petoptions = ref([
      {
        label: "Dog Trainer",
        value: "dog trainer",
      },
      {
        label: "Pet Grooming",
        value: "pet grooming",
      },
    ]);
    const tailoroptions = ref([
      {
        label: "Bag Thui",
        value: "bag thui",
      },
      {
        label: "Motor Seat",
        value: "motor seat",
      },
      {
        label: "Hmeichhe Thawmhnaw",
        value: "hmeichhe thawmhnaw",
      },
      {
        label: "Mipa Thawmhnaw",
        value: "mipa thawmhnaw",
      },
    ]);
    const educationoptions = ref([
      {
        label: "Home Tutor",
        value: "home tutor",
      },
      {
        label: "Private Coaching",
        value: "private coaching",
      },
      {
        label: "Teacher",
        value: "teacher",
      },
    ]);
    const managementoptions = ref([
      {
        label: "Advertising & Promotion Manager",
        value: "advertising & promotion manager",
      },
      {
        label: "Advertising Sales Agent",
        value: "advertising sales agent",
      },
      {
        label: "Marketing Manager",
        value: "marketing manager",
      },
    ]);
    const beautyoptions = ref([
      {
        label: "Facial",
        value: "facial",
      },
      {
        label: "Steam Bath",
        value: "steam bath",
      },
      {
        label: "Lu met",
        value: "lu met",
      },
      {
        label: "Hair Cutting",
        value: "hair cutting",
      },
      {
        label: "Spa",
        value: "spa",
      },
    ]);
    const medicaloptions = ref([
      {
        label: "Health Worker",
        value: "health worker",
      },
      {
        label: "MBBS",
        value: "mbbs",
      },
      {
        label: "Nurse",
        value: "nurse",
      },
    ]);
    const fixoptions = ref([
      {
        label: "Electronic Repairing",
        value: "electronic repairing",
      },
      {
        label: "Mobile Repair",
        value: "mobile repair",
      },
    ]);
    const videoptions = ref([
      {
        label: "Music Video",
        value: "music video",
      },
      {
        label: "Advertisement",
        value: "advertisement",
      },
    ]);
    const professionaloptions = ref([
      {
        label: "Geologist",
        value: "geologist",
      },
    ]);
    const shape = ref();
    const shape1 = ref();
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
      {
        title: "Floor Tile Phah Thiam Mamawh",
        name: "Lalngaihawma Khiangte",
        veng: "Mission Vengthlang, Aizawl",
        salary: "100",
        options: "month",
      },
      {
        title: "In Tifai Tur",
        name: "Zorempuia Chuauhang",
        veng: "Tuikhuahtlang, Aizawl",
        salary: "100",
        options: "month",
      },
      {
        title: "Nau Awm",
        name: "Lalthanghliri",
        veng: "Chaltlang, Aizawl",
        salary: "100",
        options: "month",
      },
      {
        title: "Driver",
        name: "Zira",
        veng: "Mission Veng, Aizawl",
        salary: "100",
        options: "month",
      },
    ]);

    return {
      group,
      compoptions,
      healthoptions,
      musicoptions,
      photographyoptions,
      householdoptions,
      mistirioptions,
      deliveryoptions,
      labouroptions,
      financeoptions,
      officeoptions,
      lawoptions,
      saleoptions,
      driveroptions,
      engineeroptions,
      hospitalityoptions,
      petoptions,
      tailoroptions,
      educationoptions,
      managementoptions,
      beautyoptions,
      medicaloptions,
      fixoptions,
      videoptions,
      professionaloptions,
      shape,
      shape1,
      myc,
    };
  },
};
</script>

<style>
.btn {
  text-align: right;
}
.job {
  background-color: #eef2df;
}
</style>
