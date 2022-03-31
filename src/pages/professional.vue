<template>
  <q-page padding class="pro">
    <div class="row q-col-gutter-md">
      <!-- category fliter -->
      <div class="col-2" v-if="$q.screen.gt.sm">
        <q-card square class="my-card">
          <q-card-section>
            <div class="row">
              FILTER BY CATEGORIES

              <q-btn
                style="margin: 0 90px auto"
                color="primary"
                label="Clear"
              />
            </div>

            <q-separator inset class="q-mt-sm" />

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Computer Professional"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="compoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Health &amp; Fitness"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="healthoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" expand-separator label="Music">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="musicoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Photography"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="photographyoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Household Services"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="householdoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Mistiri"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="mistirioptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Delivery"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="deliveryoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Manual Labour"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="labouroptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Office Staff"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="officeoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" expand-separator label="Music">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="musicoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Law, Public Safety and Security"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="lawoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" expand-separator label="Sales">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="saleoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" expand-separator label="Driver">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="driveroptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Engineer"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="engineeroptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Hospitality &amp; Tourism"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="hospitalityoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Pet Care"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="petoptions"
              />
            </q-expansion-item>

            <q-expansion-item class="text-left" expand-separator label="Tailor">
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="tailoroptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Education"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="educationoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Management"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="managementoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Beauty Salon"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="beautyoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Medical"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="medicaloptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Fix &amp; Repair"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="fixoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Videography"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="videoptions"
              />
            </q-expansion-item>

            <q-expansion-item
              class="text-left"
              expand-separator
              label="Professional"
            >
              <q-option-group
                v-model="group"
                type="checkbox"
                color="secondary"
                :options="professionaloptions"
              />
            </q-expansion-item>
          </q-card-section>
        </q-card>

        <!-- Location filter -->
        <q-card class="q-my-md">
          <q-card-section>
            <p>FILTER BY LOCATION</p>
            <q-separator inset vertical />
            <q-input v-model="text" type="text" label="Khua" />
            <q-input v-model="text" type="text" label="Veng" />
            <q-btn color="primary" label="Search" class="q-mt-sm" />
          </q-card-section>
        </q-card>

        <!-- District filter -->
        <q-card>
          <q-card-section>
            <p>FILTER BY DISTRICT</p>
            <q-option-group
              v-model="group"
              type="checkbox"
              color="secondary"
              :options="options"
            />
          </q-card-section>
        </q-card>
      </div>
      <!-- professional -->
      <div class="col-10">
        <div class="row">
          <div
            v-for="(professional, index) in hnaprofessional"
            :key="index"
            class="col-6"
          >
            <q-card
              class="q-my-md q-mx-md"
              @click="myfunction(professional, index)"
            >
              <q-card-section>
                <div class="row">
                  <div class="col-6">
                    <p class="ellipsis text-green" style="font-size: 20px">
                      {{ professional.head }}
                    </p>
                    <p class="ellipsis">{{ professional.name }}</p>
                    <p class="ellipsis">{{ professional.veng }}</p>

                    <q-icon
                      class="q-px-xs"
                      style="color: green"
                      name="mdi-phone-check"
                    />
                    <q-icon
                      class="q-px-xs"
                      style="color: green"
                      name="mdi-map-marker-radius"
                    />
                    <q-icon
                      class="q-px-xs"
                      style="color: green"
                      name="mdi-account-check"
                    />
                  </div>
                  <div class="image col-6" v-if="$q.screen.gt.sm">
                    <q-img
                      :src="professional.image"
                      style="width: 90px; height: 100px"
                    />
                  </div>
                </div>

                <br />
                <q-chip :label="professional.chip" />
                <q-chip :label="professional.chip1" />
                <q-chip :label="professional.chip2" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <!-- dailog popup -->
    <q-dialog v-model="profiledialog" :position="position">
      <q-card class="my-card row" :style="{ maxWidth: '100%', width: '70%' }">
        <div class="col-7">
          <q-card square>
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <p style="font-size: 30px">
                    {{ profile.head }}
                  </p>
                  <p class="ellipsis text-green" style="font-size: 20px">
                    {{ profile.name }}
                  </p>
                  <p>{{ profile.veng }}</p>
                </div>

                <!-- <p>{{ profile.image }}</p> -->
                <div class="col-6 image1">
                  <img
                    :src="profile.image"
                    style="width: 90px; height: 100px"
                  />
                </div>
              </div>
              <div>
                <q-icon
                  class="q-px-xs"
                  style="color: green"
                  name="mdi-phone-check"
                  size="20px"
                />

                <q-icon
                  class="q-px-xs"
                  style="color: green"
                  name="mdi-map-marker-radius"
                  size="20px"
                />

                <q-icon
                  class="q-px-xs"
                  style="color: green"
                  name="mdi-account-check"
                  size="20px"
                />

                <hr />
                <p>About</p>
                <ul v-for="job in professionalservice[aaa]" :key="job">
                  <li>{{ job }}</li>
                </ul>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-5 service">
          <p style="font-weight: bold; font-size: 20px">SERVICE CATEGORIES</p>

          <div
            class="bg-white"
            v-for="job in professionalservice[aaa]"
            :key="job"
          >
            <q-list>
              <q-item>
                <q-item-section v-close-popup>{{ job }}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <!-- <q-pagination
      class="flex flex-center"
      v-model="current"
      direction-links
      :max="6" /> --> </q-page
  ><!-- mobile app -->
  <div class="row q-pl-lg flex flex-center" v-if="$q.screen.gt.sm">
    <div class="col-6">
      <h4>DOWNLOAD MOBILE APP</h4>
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
    const aaa = ref();
    const current = ref(1);
    const hnaprofessional = ref([
      {
        head: "Hna thawh hi a nuam",
        name: "Zothansanga",
        veng: "Kanan, Aizawl",
        btn: "computer operator",
        detail: "computer Typing",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f85cacd2e23d.jpeg?token=5f85cacd2e386",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
      {
        head: "Engpawh thawk thei",
        name: "Lianzathawnga",
        veng: "Vengthar, lawngtlai",
        btn: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f8577776b55a.jpeg?token=5f8577776b657",
        chip: "Office Assistant",
        chip1: "Marketing Manager",
        chip2: "...",
      },
      {
        head: "Petroleum Engineer",
        name: "Malsawmzuala",
        veng: "Ramthar Vengthar, Aizawl",
        btn: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f858196e34db.jpeg?token=5f858196e35db",
        chip: "Sales Person",
        chip1: "Waiter/Waitress",
        chip2: "...",
      },
      {
        head: "Hna chi hrang hrang ka thawk ve thei",
        name: "Lalbiakengi",
        veng: "Bangla veng, Haulawng",
        btn: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f8515376688e.jpeg?token=5f85153766988",
        chip: "Facial",
        chip1: "Hair Cutting",
        chip2: "...",
      },
      {
        head: "Hna thawh hi a nuam",
        name: "Zothansanga",
        veng: "Kanan, Aizawl",
        btn: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f856a6fa69d8.jpeg?token=5f856a6fa6adf",
        chip: "Electrical Engineer",
        chip1: "Waiter/Waitress",
        chip2: "...",
      },
      {
        head: "Hna Tur zawng",
        name: "Vanlalpeka",
        veng: "Tuikual North, Aizawl",
        profession: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f8422c4f17d8.jpeg?token=5f8422c4f190c",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
      {
        head: "All Jobs With Gratuate as eligibility, all jobs with master/degree in Journalism & Mass Communication as eligibility",
        name: "Vanlalruata",
        veng: "Luangmual, Aizawl",
        profession: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f857c7832fe5.jpeg?token=5f857c78331dd",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
      {
        head: "A app hi ka hriat chian duh vang a ni e",
        name: "Lalduhsangi",
        veng: "Ramthar North, Aizawl",
        profession: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f95d7cf3dbd7.jpeg?token=5f95d7cf3dcf3",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
      {
        head: "asd ",
        name: "Lalrinzuali",
        veng: "P&E Veng, Serchhip",
        profession: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f85656f97898.jpeg?token=5f85656f979b3",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
      {
        head: "1. Mi rinawm 2.Mahni ringawt in ngaihtuah loin midang pawh hlim ve se, a   chhan chu mahni ringawt in ka cheng lo",
        name: "Lalbiakzuala",
        veng: "College Veng, Aizawl",
        profession: "Contact",
        detail: "View Profile",
        image:
          "https://www.hnainpui.com/api/file/profile-pictures/5f818bb57ee8d.jpeg?token=5f818bb57efa6",
        chip: "Computer Operator",
        chip1: "Computer Typing",
        chip2: "...",
      },
    ]);

    const group = ref([]);
    const text = ref();
    const model = ref(null);
    const searchoptions = ref(["Job", "Professional"]);
    const options = ref([
      {
        label: "Aizawl",
        value: "aizawl",
      },
      {
        label: "Lunglei",
        value: "lunglei",
      },
      {
        label: "Lawngtlai",
        value: "lawngtlai",
      },
      {
        label: "Saiha",
        value: "saiha",
      },
      {
        label: "Champhai",
        value: "champhai",
      },
      {
        label: "Mamit",
        value: "mamit",
      },
      {
        label: "Serchip",
        value: "serchip",
      },
      {
        label: "Kolasib",
        value: "kolasib",
      },
    ]);
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
        label: "Programmer",
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
        label: "Nursing Care",
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
        label: "Nauawm",
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
        label: "Heavy Passenger Motor Vehicle",
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

    const view = ref(false);
    const prof = ref(false);
    const position = ref("bottom");
    const profile = ref({
      head: "",
      name: "",
      veng: "",
      profession1: "",
      profession2: "",
      profession3: "",
      image: {},
    });
    const profiledialog = ref(false);

    const professionalservice = ref([
      {
        job1: "Cement Mistiri",
        job2: "Teacher",
        job3: "Loan Officer",
        job4: "Marketing Manager",
      },
      {
        job1: "water Filter",
        job2: "Bag Thui",
        job3: "Cook",
        job4: "Baker",
        job5: "Chef",
        job6: "Dishwasher",
        job7: "Waiter/Waitress",
        job8: "Peon",
        job9: "Office Assistant",
        job10: "Catering",
      },
      {
        job1: "Private Coaching",
        job2: "Chemical Engineer",
        job3: "Office Assistant",
      },
      {
        job1: "Facial",
        job2: "Steam Bath",
        job3: "Hair Cutting",
        job4: "Adverising & Promoting Manager",
        job5: "Health Worker",
        job6: "Health Worker",
        job7: "Nurse",
        job8: "Marketing Manager",
        job9: "Nursing Care",
      },
    ]);

    return {
      aaa,
      profiledialog,
      text,
      hnaprofessional,
      group,
      model,
      searchoptions,
      options,
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
      current,
      view,
      prof,
      position,
      profile,
      professionalservice,

      open(pos) {
        position.value = pos;
        prof.value = true;
      },
      myfunction(dialog, index) {
        aaa.value = index;
        profile.value = {
          head: dialog.head,
          name: dialog.name,
          veng: dialog.veng,
          profession1: dialog.chip,
          profession2: dialog.chip1,
          profession3: dialog.chip2,
          image: dialog.image,
        };

        profiledialog.value = true;
      },
    };
  },
};
</script>

<style scoped>
.procard {
  border-radius: 5px;
}
.mycard {
  width: 600px;
}
.category-card {
  width: 100px;
  height: 70px;
  margin: 0 auto;
}
.pro {
  background-color: #eef2df;
}
.image {
  text-align: right;
}
.dialog {
  max-width: 70%;
  max-height: 150%;
}
.service {
  background-color: #eee;
  padding: 10px;
}
.dialogcard {
  max-height: 100px;
  max-width: 300px;
}
.image1 {
  text-align: right;
  min-width: 150px;
  min-height: 70px;
}
</style>
