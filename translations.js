/**
 * translations.js — Rise and Shine Daycare & Pre-KG Center
 * Languages: English (en), Amharic (am), Sidaamu Afoo (sid)
 */

const translations = {

  /* ═══════════════════════════════════════════════════════════
     ENGLISH
  ═══════════════════════════════════════════════════════════ */
  en: {
  lang_en: "EN", lang_am: "አማ", lang_sid: "ሲዳ",
  nav_home: "Home", nav_programs: "Programs", nav_teachers: "Our Teachers",
  nav_facility: "Facility", nav_reviews: "Reviews", nav_admissions: "Admissions",
  nav_book_tour: "Book a Tour", nav_call_us: "Call Us",
  hero_welcome:  "Welcome to Rise and Shine Daycare & Pre-KG Center",
  hero_headline: "Where Every Child Feels Safe, Loved & Ready to Grow",
  hero_sub:      "A nurturing environment for infants and toddlers (6 months – 3 years), where caring teachers, a safe facility, and developmental play come together every day.",
  hero_btn_tour: "Book a Tour", hero_btn_call: "Call Us",
  trust_label: "Why Parents Trust Us", trust_heading: "Your Child's Safety is Our Priority",
  trust_licensed: "State Licensed", trust_ratio: "Staff-to-Child Ratio",
  trust_cpr: "CPR & First Aid", trust_background: "Background Checked", trust_years: "Years of Care",
  programs_label: "Our Programs", programs_heading: "Age-Appropriate Care for Every Stage",
  programs_sub: "Each program is designed to nurture your child's developmental milestones in a safe, stimulating environment.",
  // Infants (6–12 months)
  prog_infant_title: "Infants", prog_infant_age: "6 – 12 months",
  prog_infant_i1_label: "Feeding:", prog_infant_i1_text: "Provide appropriate complementary food and breastfeeding support.",
  prog_infant_i2_label: "Hygiene:", prog_infant_i2_text: "Keep the baby, clothes, feeding materials, and sleeping area clean.",
  prog_infant_i3_label: "Sleep:", prog_infant_i3_text: "Provide safe and comfortable rest and sleep.",
  prog_infant_i4_label: "Development:", prog_infant_i4_text: "Talk, sing, smile, hold, and play with the baby.",
  prog_infant_i5_label: "Movement:", prog_infant_i5_text: "Provide safe space for crawling, sitting, standing, and reaching.",
  prog_infant_i6_label: "Safety:", prog_infant_i6_text: "Closely supervise the baby and keep small or dangerous objects away.",
  // Young Toddlers (1–2 years)
  prog_young_title: "Young Toddlers", prog_young_age: "1 – 2 years",
  prog_young_i1_label: "Feeding:", prog_young_i1_text: "Provide nutritious meals and snacks and encourage self-feeding.",
  prog_young_i2_label: "Hygiene:", prog_young_i2_text: "Support handwashing, diapering/toileting, bathing, and clean clothing.",
  prog_young_i3_label: "Language:", prog_young_i3_text: "Talk, name objects, sing songs, and encourage simple words.",
  prog_young_i4_label: "Movement:", prog_young_i4_text: "Encourage walking, running, climbing, and simple physical play.",
  prog_young_i5_label: "Play:", prog_young_i5_text: "Provide simple toys, picture books, music, and safe exploration.",
  prog_young_i6_label: "Independence:", prog_young_i6_text: "Encourage children to do simple things by themselves.",
  // Toddlers (2–3 years)
  prog_toddler_title: "Toddlers", prog_toddler_age: "2 – 3 years",
  prog_toddler_i1_label: "Feeding:", prog_toddler_i1_text: "Provide balanced local foods and encourage children to eat independently.",
  prog_toddler_i2_label: "Hygiene:", prog_toddler_i2_text: "Teach handwashing, toilet use, and personal cleanliness.",
  prog_toddler_i3_label: "Language:", prog_toddler_i3_text: "Encourage speaking, listening, naming, and simple conversations.",
  prog_toddler_i4_label: "Learning through play:", prog_toddler_i4_text: "Use local materials, toys, songs, stories, drawing, and simple games.",
  prog_toddler_i5_label: "Social skills:", prog_toddler_i5_text: "Teach sharing, taking turns, greeting, and playing with others.",
  prog_toddler_i6_label: "Independence:", prog_toddler_i6_text: "Encourage dressing, eating, cleaning up, and other simple self-help activities.",
  // Preschool Age (3–4 years)
  prog_pre_title: "Preschool Age", prog_pre_age: "3 – 4 years",
  prog_pre_i1_label: "Learning:", prog_pre_i1_text: "Introduce simple numbers, letters, colors, shapes, and everyday concepts.",
  prog_pre_i2_label: "Language:", prog_pre_i2_text: "Develop speaking, listening, storytelling, and vocabulary.",
  prog_pre_i3_label: "Social development:", prog_pre_i3_text: "Teach cooperation, sharing, respect, and following simple rules.",
  prog_pre_i4_label: "Creativity:", prog_pre_i4_text: "Provide drawing, coloring, music, singing, storytelling, and role play.",
  prog_pre_i5_label: "Physical development:", prog_pre_i5_text: "Provide outdoor play, running, jumping, balancing, and other physical activities.",
  prog_pre_i6_label: "School readiness:", prog_pre_i6_text: "Develop attention, participation, self-confidence, independence, and simple learning routines.",
  schedule_label: "Daily Schedule", schedule_heading: "A Day in the Life",
  schedule_sub: "Every day is thoughtfully structured to balance learning, play, rest, and nourishment.",
  sched_arrival_time: "8:00 AM", sched_arrival_title: "Arrival & Warm Welcome",
  sched_arrival_desc: "Individual greetings, comfort transition, parent update",
  sched_snack_time: "9:00 AM", sched_snack_title: "Morning Snack & Feeding",
  sched_snack_desc: "Healthy snacks, self-feeding practice, social mealtime",
  sched_play_time: "9:30 AM", sched_play_title: "Play & Learning Activities",
  sched_play_desc: "Sensory play, art, music, developmental activities",
  sched_outdoor_time: "10:15 AM", sched_outdoor_title: "Outdoor Time",
  sched_outdoor_desc: "Fresh air, gross motor play, nature exploration",
  sched_lunch_time: "11:30 AM", sched_lunch_title: "Lunch & Hygiene",
  sched_lunch_desc: "Nutritious meal, handwashing, diaper change/potty",
  sched_nap_time: "12:30 PM", sched_nap_title: "Nap Time",
  sched_nap_desc: "Individualized schedules, safe monitored rest",
  sched_afternoon_time: "2:30 PM", sched_afternoon_title: "Afternoon Activities",
  sched_afternoon_desc: "Creative play, puzzles, group activities, free play",
  sched_pickup_time: "4:30 PM", sched_pickup_title: "Pickup & Goodbye",
  sched_pickup_desc: "Daily summary for parents, warm goodbye routine",
  safety_label: "Health & Safety", safety_heading: "Your Child's Well-being Comes First",
  safety_sub: "We maintain the highest standards of safety, cleanliness, and nutrition across every aspect of care.",
  tab_facility: "Facility", tab_illness: "Illness", tab_hygiene: "Hygiene",
  tab_nutrition: "Nutrition", tab_nap: "Nap",
  fac_secure_title: "Secure Entry System", fac_secure_desc: "Keycard access with video intercom for authorized pick-up only",
  fac_camera_title: "Live Camera Monitoring", fac_camera_desc: "Cameras in all classrooms and common areas for real-time oversight",
  fac_proof_title: "Childproofed Spaces", fac_proof_desc: "Soft flooring, covered outlets, secured furniture, and gated areas",
  fac_drill_title: "Fire & Safety Drills", fac_drill_desc: "Regular emergency drills and up-to-date fire safety equipment",
  ill_check_title: "Daily Health Checks", ill_check_desc: "Temperature checks and visual health screening at drop-off every morning",
  ill_excl_title: "Illness Exclusion Policy", ill_excl_desc: "Children with fever, vomiting, or contagious symptoms stay home until symptom-free for 24 hours",
  ill_comm_title: "Parent Communication", ill_comm_desc: "Immediate notification to parents if a child shows signs of illness during the day",
  ill_staff_title: "Staff Health Standards", ill_staff_desc: "Teachers follow the same illness guidelines and model good hygiene habits",
  hyg_hand_title: "Frequent Handwashing", hyg_hand_desc: "Before/after meals, after diaper changes, after outdoor play, and regularly throughout the day",
  hyg_san_title: "Daily Sanitization", hyg_san_desc: "Toys, surfaces, and equipment cleaned and sanitized multiple times per day",
  hyg_diaper_title: "Diapering Protocol", hyg_diaper_desc: "Strict changing procedures with gloves, sanitization, and logged changes",
  hyg_air_title: "Ventilation & Air Quality", hyg_air_desc: "HVAC filtered air and regular fresh air circulation throughout the facility",
  nut_meals_title: "Balanced, Nutritious Meals", nut_meals_desc: "Breakfast, lunch, and afternoon snack prepared fresh daily with whole foods",
  nut_allergy_title: "Allergy Management", nut_allergy_desc: "Individual allergy plans posted in kitchen and classrooms, with alternatives always available",
  nut_self_title: "Self-Feeding Support", nut_self_desc: "Age-appropriate utensils and gentle encouragement for developing independence",
  nut_parent_title: "Parent-Supplied Options", nut_parent_desc: "Parents may provide breastmilk, formula, or special dietary items; we follow individual feeding plans",
  nap_safe_title: "Safe Sleep Practices", nap_safe_desc: "Back-to-sleep positioning, firm mattresses, no loose bedding — following AAP guidelines",
  nap_monitor_title: "Continuous Monitoring", nap_monitor_desc: "Teachers actively supervise nap time with regular visual checks every few minutes",
  nap_sched_title: "Individualized Schedules", nap_sched_desc: "Each child follows their own nap schedule based on age and parent preferences",
  nap_calm_title: "Calming Environment", nap_calm_desc: "Dimmed lights, soft music, and cozy individual sleep spaces for restful naps",
  teachers_label: "Our Team", teachers_heading: "Meet the Teachers Who Care",
  teachers_sub: "Experienced, caring professionals who are passionate about early childhood development.",
  teacher1_role: "Lead Infant Teacher", teacher1_creds: "CDA Certified · 8 years",
  teacher2_role: "Toddler Lead", teacher2_creds: "B.S. Early Ed · 12 years",
  teacher3_role: "Infant Caregiver", teacher3_creds: "CPR Certified · 5 years",
  teacher4_role: "Young Toddler Teacher", teacher4_creds: "M.A. Child Dev · 10 years",
  facility_label: "Our Space", facility_heading: "Take a Tour",
  facility_sub: "Bright, safe, and designed with little ones in mind — every room is built for exploration and comfort.",
  facility_tiktok_heading: "From Our TikTok",
  facility_tiktok_follow: "Follow @riseandshine0 for daily glimpses of life at Rise and Shine.",
  facility_watch: "▶ Watch on TikTok", lightbox_close: "Close",
  reviews_label: "Testimonials", reviews_heading: "What Parents Say",
  reviews_sub: "Hear from families who trust us with their most precious little ones.",
  review1_text: "From the very first visit, we knew this was the right place. The teachers greeted our newborn by name before she even started. Watching her light up during tummy time sessions tells us everything — she feels completely at home here.",
  review1_author: "— Sara H.", review1_role: "Parent of infant",
  review2_text: "My son used to be shy around other kids, but after just a month at Rise and Shine he's been making friends and coming home singing new songs every day. The structured play and circle time have done wonders for his confidence and social skills.",
  review2_author: "— Daniel K.", review2_role: "Parent of toddler",
  review3_text: "The safety measures here put my mind at ease every single morning. Secure entry, background-checked staff, and a clean, well-organized space — I never worry while I'm at work. My daughter practically sprints inside when we arrive!",
  review3_author: "— Tigist A.", review3_role: "Parent of young toddler",
  review4_text: "As first-time parents, we had so many questions. The team at Rise and Shine answered every single one patiently and kept us updated throughout the day. Knowing our baby is in such caring hands makes going back to work so much easier.",
  review4_author: "— Yonas & Liya B.", review4_role: "Parent of infant",
  review5_text: "The activities here are genuinely thoughtful — art, outdoor time, sensory play, story corner. My toddler's vocabulary has exploded since she started, and her teacher sends us little notes about her day. It's the small things that make this place truly special.",
  review5_author: "— Hana W.", review5_role: "Parent of toddler",
  review6_text: "Dropping off my daughter used to break my heart — until we found Rise and Shine. Within a week she was running through the door every morning. The teachers remember every little detail, from her favorite song to how she likes her nap blanket folded. That kind of care is priceless.",
  review6_author: "— Meron T.", review6_role: "Parent of young toddler",
  admissions_label: "Get Started", admissions_heading: "Enrollment Steps & FAQ",
  enroll_heading: "How to Enroll",
  step1_title: "Schedule a Tour", step1_desc: "Visit our facility, meet the teachers, and see the classrooms firsthand.",
  step2_title: "Submit Application", step2_desc: "Complete the enrollment form with your child's information and preferences.",
  step3_title: "Meet & Greet", step3_desc: "A trial visit so your child can experience the classroom environment.",
  step4_title: "Welcome Aboard!", step4_desc: "Complete paperwork, set the start date, and begin your family's journey with us.",
  tuition_label: "Tuition:", tuition_contact: "Contact us for detailed pricing and available spots.",
  faq_heading: "Frequently Asked Questions",
  faq1_q: "What are your hours of operation?", faq1_a: "We are open Monday through Friday, 7:00 AM to 6:00 PM. We offer flexible drop-off and pick-up within those hours.",
  faq2_q: "Are meals and snacks provided?", faq2_a: "Yes! We provide breakfast, lunch, and an afternoon snack daily. All meals are prepared fresh and meet nutritional guidelines. We accommodate dietary restrictions and allergies.",
  faq3_q: "What should I bring for my child?", faq3_a: "Diapers, wipes, a change of clothes, comfort items (blanket, stuffed animal), and any medications. We'll provide a full list upon enrollment.",
  faq4_q: "Is there a waitlist?", faq4_a: "Availability varies by age group. Contact us to check current openings or to be added to our waitlist. We'll notify you as soon as a spot opens.",
  faq5_q: "Do you offer part-time or drop-in care?", faq5_a: "We offer both full-time and part-time schedules. Contact us to discuss options that work for your family's needs.",
  faq6_q: "How do you handle the transition for new children?", faq6_a: "We use a gradual transition plan — starting with short visits that increase over time. This helps your child build trust with their new teachers and feel comfortable at their own pace.",
  contact_label: "Visit Us", contact_heading: "Book a Visit",
  contact_sub: "We'd love to show you around. Schedule a tour to see our classrooms, meet our teachers, and learn about our programs.",
  form_parent_name: "Parent Name", form_name_ph: "Your full name",
  form_phone: "Phone", form_phone_ph: "Phone number",
  form_email: "Email", form_email_ph: "you@email.com",
  form_date: "Preferred Date", form_time: "Preferred Time", form_time_ph: "Select a time",
  form_time_morning: "Morning (9–11 AM)", form_time_midday: "Midday (11 AM–1 PM)", form_time_afternoon: "Afternoon (1–4 PM)",
  form_child_age: "Child's Age", form_age_ph: "Select age group",
  form_age_6_12: "6 – 12 months", form_age_1_2: "1 – 2 years", form_age_2_3: "2 – 3 years", form_age_unborn: "Not yet born",
  form_submit: "Book My Tour", form_confirm: "We'll confirm your tour within 24 hours.",
  info_address_label: "Address", info_address: "Hawassa, Sidama, Ethiopia",
  info_phone_label: "Phone", info_email_label: "Email",
  info_hours_label: "Hours", info_hours: "Monday – Friday: 7:00 AM – 6:00 PM",
  footer_tagline: "Childcare & Daycare",
  footer_nav_home: "Home", footer_nav_prog: "Programs", footer_nav_admit: "Admissions", footer_nav_cont: "Contact",
  footer_copyright: "© 2026 Rise and Shine Daycare & Pre-KG Center. All rights reserved.",
  mobile_call: "Call", mobile_book: "Book a Tour",
  }, // end en


  /* ═══════════════════════════════════════════════════════════
     AMHARIC — አማርኛ
  ═══════════════════════════════════════════════════════════ */
  am: {
  lang_en: "EN", lang_am: "አማ", lang_sid: "ሲዳ",
  nav_home: "መነሻ", nav_programs: "ፕሮግራሞች", nav_teachers: "መምህሮቻችን",
  nav_facility: "ተቋሙ", nav_reviews: "ግምገማዎች", nav_admissions: "ምዝገባ",
  nav_book_tour: "ጉብኝት ይያዙ", nav_call_us: "ይደውሉልን",
  hero_welcome: "ወደ Rise and Shine ዳይኬር እና ቅድመ-መደበኛ ትምህርት ማዕከል እንኳን ደህና መጡ",
  hero_headline: "እያንዳንዱ ልጅ ደህንነቱ የተጠበቀ፣ የተወደደ እና ለዕድገት ዝግጁ የሚሆንበት ቦታ",
  hero_sub: "ከ6 ወር እስከ 3 ዓመት ለሆኑ ሕፃናት እና ትናንሽ ልጆች ፍቅርና እንክብካቤ የሚሰጥ ቦታ — ተሰጥኦ ያላቸው መምህሮች፣ ደህንነቱ የተጠበቀ ህንፃ እና ለዕድገት ያለመ ጨዋታ ዕለት ዕለት አብረው ይሰራሉ።",
  hero_btn_tour: "ጉብኝት ይያዙ", hero_btn_call: "ይደውሉልን",
  trust_label: "ወላጆች ለምን ያምኑናል", trust_heading: "የልጅዎ ደህንነት ቅድሚያ ጉዳያችን ነው",
  trust_licensed: "በመንግሥት የተፈቀደ", trust_ratio: "የሠራተኛ ለልጅ ጥምርታ",
  trust_cpr: "CPR እና የመጀመሪያ እርዳታ", trust_background: "የዳራ ማጣሪያ ያለፈ", trust_years: "ዓመታት አገልግሎት",
  programs_label: "ፕሮግራሞቻችን", programs_heading: "ለእያንዳንዱ እድሜ ተስማሚ እንክብካቤ",
  programs_sub: "እያንዳንዱ ፕሮግራም የልጅዎን የዕድገት ደረጃዎች ለማሳደግ ደህንነቱ በተጠበቀ እና አነቃቂ አካባቢ ነው የተዘጋጀው።",
  // ሕፃናት (6–12 ወር)
  prog_infant_title: "ሕፃናት", prog_infant_age: "6 – 12 ወር",
  prog_infant_i1_label: "መመገብ፦", prog_infant_i1_text: "ተገቢ ተጨማሪ ምግብ መስጠትና ጡት ማጥባትን መደገፍ።",
  prog_infant_i2_label: "ንጽህና፦", prog_infant_i2_text: "ልጁን፣ ልብሱን፣ የመመገቢያ እቃዎችንና የመኝታ ቦታውን ንጹህ ማድረግ።",
  prog_infant_i3_label: "እረፍት፦", prog_infant_i3_text: "ደህንነቱ የተጠበቀና ምቹ የእረፍትና የእንቅልፍ ጊዜ መስጠት።",
  prog_infant_i4_label: "እድገት፦", prog_infant_i4_text: "ማነጋገር፣ መዝፈን፣ ፈገግ ማለት፣ ማቀፍና መጫወት።",
  prog_infant_i5_label: "እንቅስቃሴ፦", prog_infant_i5_text: "ለመሳብ፣ ለመቀመጥ፣ ለመቆምና ለመድረስ የሚያስችል ደህንነቱ የተጠበቀ ቦታ መስጠት።",
  prog_infant_i6_label: "ደህንነት፦", prog_infant_i6_text: "ልጁን በቅርብ መከታተልና ትንንሽ ወይም አደገኛ ነገሮችን ከእርሱ ማራቅ።",
  // ታናናሽ ታዳጊ ሕፃናት (1–2 ዓመት)
  prog_young_title: "ታናናሽ ታዳጊ ሕፃናት", prog_young_age: "1 – 2 ዓመት",
  prog_young_i1_label: "መመገብ፦", prog_young_i1_text: "ገንቢ ምግብና መክሰስ መስጠትና በራሳቸው እንዲመገቡ ማበረታታት።",
  prog_young_i2_label: "ንጽህና፦", prog_young_i2_text: "እጅ መታጠብን፣ ዳይፐር/መፀዳጃ አጠቃቀምን፣ መታጠብንና ንጹህ ልብስ መልበስን መደገፍ።",
  prog_young_i3_label: "ቋንቋ፦", prog_young_i3_text: "ማነጋገር፣ ነገሮችን በስም መጥራት፣ ዘፈኖችን መዝፈንና ቀላል ቃላትን እንዲጠቀሙ ማበረታታት።",
  prog_young_i4_label: "እንቅስቃሴ፦", prog_young_i4_text: "መራመድን፣ መሮጥን፣ መውጣትንና ቀላል አካላዊ ጨዋታን ማበረታታት።",
  prog_young_i5_label: "ጨዋታ፦", prog_young_i5_text: "ቀላል መጫወቻዎችን፣ የስዕል መጻሕፍትን፣ ሙዚቃንና ደህንነቱ የተጠበቀ የመመራመር ዕድል መስጠት።",
  prog_young_i6_label: "ነፃነት፦", prog_young_i6_text: "ቀላል ተግባራትን በራሳቸው እንዲያከናውኑ ማበረታታት።",
  // ታዳጊ ሕፃናት (2–3 ዓመት)
  prog_toddler_title: "ታዳጊ ሕፃናት", prog_toddler_age: "2 – 3 ዓመት",
  prog_toddler_i1_label: "መመገብ፦", prog_toddler_i1_text: "የተመጣጠነ የአካባቢ ምግብ መስጠትና በራሳቸው እንዲመገቡ ማበረታታት።",
  prog_toddler_i2_label: "ንጽህና፦", prog_toddler_i2_text: "እጅ መታጠብን፣ መፀዳጃ ቤት አጠቃቀምንና የግል ንጽህናን ማስተማር።",
  prog_toddler_i3_label: "ቋንቋ፦", prog_toddler_i3_text: "መናገርን፣ ማዳመጥን፣ ነገሮችን በስም መጥራትንና ቀላል ውይይትን ማበረታታት።",
  prog_toddler_i4_label: "በጨዋታ መማር፦", prog_toddler_i4_text: "የአካባቢ ቁሳቁሶችን፣ መጫወቻዎችን፣ ዘፈኖችን፣ ተረቶችን፣ ስዕልንና ቀላል ጨዋታዎችን መጠቀም።",
  prog_toddler_i5_label: "ማህበራዊ ክህሎት፦", prog_toddler_i5_text: "መካፈልን፣ ተራ በተራ መጠቀምን፣ ሰላምታ መስጠትንና ከሌሎች ጋር መጫወትን ማስተማር።",
  prog_toddler_i6_label: "ነፃነት፦", prog_toddler_i6_text: "መልበስን፣ መመገብን፣ የተጠቀሙትን ማጽዳትንና ሌሎች ቀላል የራስ-እርዳታ ተግባራትን እንዲለማመዱ ማድረግ።",
  // የቅድመ መደበኛ (3–4 ዓመት)
  prog_pre_title: "የቅድመ መደበኛ", prog_pre_age: "3 – 4 ዓመት",
  prog_pre_i1_label: "መማር፦", prog_pre_i1_text: "ቀላል ቁጥሮችን፣ ፊደላትን፣ ቀለማትን፣ ቅርጾችንና የዕለት ተዕለት ጽንሰ-ሀሳቦችን ማስተዋወቅ።",
  prog_pre_i2_label: "ቋንቋ፦", prog_pre_i2_text: "የመናገር፣ የማዳመጥ፣ የተረት አቀራረብና የቃላት እውቀትን ማዳበር።",
  prog_pre_i3_label: "ማህበራዊ እድገት፦", prog_pre_i3_text: "መተባበርን፣ መካፈልን፣ መከባበርንና ቀላል ደንቦችን መከተልን ማስተማር።",
  prog_pre_i4_label: "ፈጠራ፦", prog_pre_i4_text: "ስዕል፣ ቀለም መቀባት፣ ሙዚቃ፣ ዘፈን፣ ተረትና የሚና ጨዋታ ማካተት።",
  prog_pre_i5_label: "አካላዊ እድገት፦", prog_pre_i5_text: "የውጭ ጨዋታ፣ መሮጥ፣ መዝለል፣ ሚዛንን መጠበቅና ሌሎች አካላዊ ተግባራትን ማካተት።",
  prog_pre_i6_label: "ለትምህርት ዝግጁነት፦", prog_pre_i6_text: "ትኩረትን፣ ተሳትፎን፣ በራስ መተማመንን፣ ነፃነትንና ቀላል የመማር ልማዶችን ማዳበር።",
  schedule_label: "የዕለት መርሃ ግብር", schedule_heading: "በሕይወት ውስጥ አንድ ቀን",
  schedule_sub: "እያንዳንዱ ቀን ትምህርት፣ ጨዋታ፣ እረፍት እና አመጋገብ ሚዛናዊ እንዲሆን ሆኖ ታስቦ ተዘጋጅቷል።",
  sched_arrival_time: "8:00 ጠዋት", sched_arrival_title: "መምጣት እና ሞቅ ያለ አቀባበል",
  sched_arrival_desc: "ግለሰባዊ ሰላምታ፣ ምቾት ሽግግር፣ ለወላጆች ዝማኔ",
  sched_snack_time: "9:00 ጠዋት", sched_snack_title: "የጠዋት መክሰስ እና አመጋገብ",
  sched_snack_desc: "ጤናማ መክሰስ፣ ራስ ምግብ መብላት ልምምድ፣ ማህበራዊ የምግብ ጊዜ",
  sched_play_time: "9:30 ጠዋት", sched_play_title: "ጨዋታ እና ትምህርታዊ እንቅስቃሴዎች",
  sched_play_desc: "የስሜት ህዋሳት ጨዋታ፣ ስዕል፣ ሙዚቃ፣ የዕድገት እንቅስቃሴዎች",
  sched_outdoor_time: "10:15 ጠዋት", sched_outdoor_title: "ውጭ ጊዜ",
  sched_outdoor_desc: "ንጹህ አየር፣ ጠቅላላ ሞተር ጨዋታ፣ ተፈጥሮ ፍለጋ",
  sched_lunch_time: "11:30 ጠዋት", sched_lunch_title: "ምሳ እና ንፅህና",
  sched_lunch_desc: "ምጥ ያለ ምግብ፣ እጅ መታጠብ፣ ዳይፐር ለውጥ/መፀዳጃ",
  sched_nap_time: "12:30 ከሰዓት", sched_nap_title: "የእንቅልፍ ጊዜ",
  sched_nap_desc: "ግለሰባዊ መርሃ ግብሮች፣ ደህንነቱ የተጠበቀ የሚታይ እረፍት",
  sched_afternoon_time: "2:30 ከሰዓት", sched_afternoon_title: "ከሰዓት እንቅስቃሴዎች",
  sched_afternoon_desc: "ፈጠራ ጨዋታ፣ ፓዝሎች፣ የቡድን እንቅስቃሴዎች፣ ነፃ ጨዋታ",
  sched_pickup_time: "4:30 ከሰዓት", sched_pickup_title: "መውሰድ እና ስንብት",
  sched_pickup_desc: "ለወላጆች የዕለቱ ማጠቃለያ፣ ሞቅ ያለ ስንብት ፕሮግራም",
  safety_label: "ጤና እና ደህንነት", safety_heading: "የልጅዎ ደህንነት ቅድሚያ ነው",
  safety_sub: "በእንክብካቤ እያንዳንዱ ገፅታ ከፍተኛ የደህንነት፣ ንፅህና እና አመጋገብ ደረጃዎችን እናቆያለን።",
  tab_facility: "ተቋሙ", tab_illness: "ሕመም", tab_hygiene: "ንፅህና",
  tab_nutrition: "አመጋገብ", tab_nap: "እንቅልፍ",
  fac_secure_title: "ደህንነቱ የተጠበቀ መግቢያ ስርዓት", fac_secure_desc: "ለፈቀደ መውሰዲያ ብቻ ቪዲዮ ኢንተርኮም ያለው የቁልፍ ካርድ መዳረሻ",
  fac_camera_title: "የቀጥታ ካሜራ ክትትል", fac_camera_desc: "ሁሉም ክፍሎች እና የጋራ ቦታዎች ካሜራ አላቸው",
  fac_proof_title: "ለልጆች የተዘጋጀ ቦታ", fac_proof_desc: "ለስላሳ ወለል፣ የተሸፈኑ ሶኬቶች፣ ደህንነቱ የተጠበቀ ቁሳቁሶች",
  fac_drill_title: "የእሳት እና ደህንነት ልምምዶች", fac_drill_desc: "መደበኛ የአደጋ ጊዜ ልምምዶች እና ዘመናዊ የደህንነት መሳሪያዎች",
  ill_check_title: "የዕለታዊ ጤና ምርመራ", ill_check_desc: "ዕለት ዕለት ጠዋት ሙቀት ምርመራ እና ጤና ፍተሻ",
  ill_excl_title: "የሕመም ማግለያ ፖሊሲ", ill_excl_desc: "ትኩሳት፣ ማስታወክ ወይም ተዛማጅ ምልክቶች ያሉ ልጆች 24 ሰዓት ምልክት ነፃ እስኪሆኑ ቤት ይቆያሉ",
  ill_comm_title: "ለወላጆች ግንኙነት", ill_comm_desc: "ልጅ የሕመም ምልክት ካሳየ ወዲያውኑ ወላጆችን እናሳውቃለን",
  ill_staff_title: "የሠራተኞች ጤና ደረጃዎች", ill_staff_desc: "መምህሮች ተመሳሳይ የሕመም መመሪያዎችን ይከተላሉ እና ጥሩ ልምዶችን ያሳያሉ",
  hyg_hand_title: "ቦቤ እጅ መታጠብ", hyg_hand_desc: "ከምግብ በፊት/በኋላ፣ ዳይፐር ከቀየሩ በኋላ፣ ውጭ ጨዋታ በኋላ እና ቀን ሙሉ",
  hyg_san_title: "ዕለታዊ ንፅህና", hyg_san_desc: "መጫወቻዎች፣ ወለሎች እና መሳሪያዎች በቀን ብዙ ጊዜ ይጸዳሉ",
  hyg_diaper_title: "ዳይፐር ቀይሮ ፕሮቶኮል", hyg_diaper_desc: "ጓንት፣ ንፅህና እና ምዝገባ ያለው ጥብቅ የቀይሮ አሰራር",
  hyg_air_title: "አየር ዝውውር እና ጥራት", hyg_air_desc: "ፊልተር አየር እና መደበኛ ንጹህ አየር ዝውውር",
  nut_meals_title: "ሚዛናዊ እና ምጥ ያለ ምግቦች", nut_meals_desc: "ቁርስ፣ ምሳ እና ከሰዓት መክሰስ ዕለት ዕለት ትኩስ ይዘጋጃሉ",
  nut_allergy_title: "አለርጂ አስተዳደር", nut_allergy_desc: "በወጥ ቤት እና ክፍሎች ውስጥ የተለጠፉ ግለሰባዊ የአለርጂ እቅዶች",
  nut_self_title: "ራስ ምግብ መብላት ድጋፍ", nut_self_desc: "ለዕድሜ ተስማሚ ምግቦች እና ነፃነት ለማዳበር ቀስ ያለ ማበረታቻ",
  nut_parent_title: "ወላጅ ያቀረበ አማራጮች", nut_parent_desc: "ወላጆች የጡት ወተት፣ ፎርሙላ ወይም ልዩ ምግቦች ሊያቀርቡ ይችላሉ",
  nap_safe_title: "ደህንነቱ የተጠበቀ የእንቅልፍ ልምዶች", nap_safe_desc: "ጀርባ ላይ ተኝቶ ማደር፣ ጸጥ ያለ ፍራሽ፣ ልቅ አልጋ ልብስ የለም",
  nap_monitor_title: "ቀጣይ ክትትል", nap_monitor_desc: "መምህሮች በጥቂት ደቂቃዎች ውስጥ መደበኛ ምርመራ ያደርጋሉ",
  nap_sched_title: "ግለሰባዊ መርሃ ግብሮች", nap_sched_desc: "እያንዳንዱ ልጅ በዕድሜ እና በወላጅ ምርጫ መሰረት የራሱ የእንቅልፍ መርሃ ግብር ይከተላል",
  nap_calm_title: "ሰላማዊ አካባቢ", nap_calm_desc: "ጨለማ ብርሃን፣ ለስላሳ ሙዚቃ እና ምቹ የእንቅልፍ ቦታዎች",
  teachers_label: "ቡድናችን", teachers_heading: "የሚንከባከቡ መምህሮቻችን",
  teachers_sub: "ቀደምት የልጅ ዕድገት ላይ ፍቅር ያላቸው ልምድ ያላቸው ባለሙያዎች።",
  teacher1_role: "ዋና ሕፃናት መምህር", teacher1_creds: "CDA የምስክር ወረቀት · 8 ዓመት",
  teacher2_role: "ጊዜያዊ ልጆች ዋና", teacher2_creds: "B.S. ቀደምት ትምህርት · 12 ዓመት",
  teacher3_role: "ሕፃን ተንከባካቢ", teacher3_creds: "CPR የምስክር ወረቀት · 5 ዓመት",
  teacher4_role: "ወጣት ጊዜያዊ ልጅ መምህር", teacher4_creds: "M.A. የልጅ ዕድገት · 10 ዓመት",
  facility_label: "ቦታችን", facility_heading: "ጉብኝት ያድርጉ",
  facility_sub: "ብሩህ፣ ደህንነቱ የተጠበቀ እና ለትናንሽ ልጆች ሆኖ የተነደፈ — እያንዳንዱ ክፍል ፍለጋ እና ምቾት ለማምጣት ተሰርቷል።",
  facility_tiktok_heading: "ከTikTok ጋር", facility_tiktok_follow: "ዕለት ዕለት ከ@riseandshine0 ይከተሉ።",
  facility_watch: "▶ ቲክቶክ ይዩ", lightbox_close: "ዝጋ",
  reviews_label: "ምስክርነቶች", reviews_heading: "ወላጆች ምን ይላሉ",
  reviews_sub: "ለሕፃናቶቻቸው የሚያምኑን ቤተሰቦች ይናገሩ።",
  review1_text: "በመጀመሪያ ጉብኝት ትክክለኛው ቦታ መሆኑን ተረዳን። መምህሮቹ ሕፃናዋን ስሟን ጠርተው ተቀበሉ። እዚህ ሙሉ ቤቷ እንደሆነ ሆናለች።",
  review1_author: "— ሳራ ሀ.", review1_role: "የሕፃን ወላጅ",
  review2_text: "ልጄ ከሌሎች ልጆች ጋር ቀናት ነበር፤ አሁን ጓደኞች አፍርቶ ዘፈን እየዘፈነ ቤት ይመጣል። ስልቱ ባለው ጨዋታ ለሱ ስብዕና ትልቅ ያደረገ ነው።",
  review2_author: "— ዳንኤል ኬ.", review2_role: "የጊዜያዊ ልጅ ወላጅ",
  review3_text: "እዚህ ያለው ደህንነት ዕለት ዕለት ልቤን ያረጋጋዋል። ደህንነቱ የተጠበቀ መዳረሻ፣ ምርምር ያለፉ ሠራተኞች — ሥራ ሳለሁ አልሰጋም።",
  review3_author: "— ትጊስት አ.", review3_role: "የወጣት ጊዜያዊ ልጅ ወላጅ",
  review4_text: "እንደ አዲስ ወላጆች ብዙ ጥያቄ ነበረን። ቡድኑ ሁሉንም ትዕግሥት ሲኖረው ዕለቱን ሙሉ ዝማኔ ሰጠን።",
  review4_author: "— ዮናስ እና ሊያ ቢ.", review4_role: "የሕፃን ወላጆች",
  review5_text: "እዚህ ያሉ እንቅስቃሴዎች ያስባሉ — ስዕል፣ ውጭ ጊዜ፣ ታሪክ ማዕዘን። ቃላቶቿ ፈነዱ፤ መምህሯ ዕለት ዕለት ማስታወሻ ትልካለች።",
  review5_author: "— ሃና ወ.", review5_role: "የጊዜያዊ ልጅ ወላጅ",
  review6_text: "ልጄን ማስቀረት ሲያሳምመኝ ነበር — Rise and Shine እስካገኘን ድረስ። ሳምንት ሳይሞላ ሯጣ መግባት ጀመረች። ያ ዓይነት እንክብካቤ ዋጋ የለውም።",
  review6_author: "— ሜሮን ቲ.", review6_role: "የወጣት ጊዜያዊ ልጅ ወላጅ",
  admissions_label: "ጀምሩ", admissions_heading: "የምዝገባ ደረጃዎች እና ጥያቄዎች",
  enroll_heading: "እንዴት ይምዝገቡ",
  step1_title: "ጉብኝት ይያዙ", step1_desc: "ተቋሙን ጎብኙ፣ መምህሮቹን ያናግሩ እና ክፍሎቹን ያዩ።",
  step2_title: "ማመልከቻ ያስገቡ", step2_desc: "ስለ ልጅዎ መረጃ ያለው የምዝገባ ፎርም ይሙሉ።",
  step3_title: "ተዋወቁ", step3_desc: "ልጅዎ የክፍሉን አካባቢ ሊለማምድ የሚችልበት ሙከራ ጉብኝት።",
  step4_title: "እንኳን ደህና መጡ!", step4_desc: "ሰነዶቹን ሙሉ፣ መጀመሪያ ቀን ይወስኑ እና ከቤተሰባቸው ጋር ጉዞ ይጀምሩ።",
  tuition_label: "ክፍያ፡", tuition_contact: "ዝርዝር ዋጋ እና ክፍት ቦታ ለማወቅ ያግኙን።",
  faq_heading: "ተደጋጋሚ ጥያቄዎች",
  faq1_q: "የሥራ ሰዓቶቻችሁ ምንድን ናቸው?", faq1_a: "ሰኞ እስከ አርብ ከጠዋቱ 7 ሰዓት እስከ ምሽቱ 6 ሰዓት ክፍት ነን። ሁሉን ጊዜ ሊቆጥቡ ይችላሉ።",
  faq2_q: "ምግቦች እና መክሰስ ይቀርባሉ?", faq2_a: "አዎ! ቁርስ፣ ምሳ እና ከሰዓት መክሰስ ዕለት ዕለት ትኩስ ይዘጋጃሉ። አለርጂዎችን እና ልዩ ፍላጎቶችን እናስተናግዳለን።",
  faq3_q: "ለልጄ ምን ማምጣት አለብኝ?", faq3_a: "ዳይፐሮች፣ ወይሌ፣ ልብስ ለውጥ፣ ምቾት ዕቃዎች (ብርድ ልብስ፣ ጫጩት) እና ማናቸውም መድሃኒቶች። ሙሉ ዝርዝር ምዝገባ ጊዜ እንሰጣለን።",
  faq4_q: "የጠባቂ ዝርዝር አለ?", faq4_a: "ዕድሜ ቡድን እንደሆነ ይለያያል። ለሙሉ ዝርዝር ያግኙን። ቦታ ሲከፍት ወዲያውኑ እናሳውቃለን።",
  faq5_q: "ከፊሉ ጊዜ ወይም ጊዜያዊ እንክብካቤ ይሰጣሉ?", faq5_a: "ሙሉ ጊዜ እና ከፊሉ ጊዜ ሁለቱንም እናቀርባለን። ለቤተሰብዎ የሚስማማ አማራጭ ለማወቅ ያግኙን።",
  faq6_q: "ለአዲስ ልጆች ሽግግርን እንዴት ይያዛሉ?", faq6_a: "ቀስ ቀስ ከሚጨምር አጭር ጉብኝቶች ጀምሮ የሚደረግ ሽግግር እቅድ አለን። ልጅዎ ከመምህሮቻቸው ጋር እምነት ይፈጥራል።",
  contact_label: "ጎብኙን", contact_heading: "ጉብኝት ይያዙ",
  contact_sub: "እናሳይዎ ደስ ይለናል። ክፍሎቹን፣ መምህሮቹን እና ፕሮግራሞቹን ለማወቅ ጉብኝት ያዙ።",
  form_parent_name: "የወላጅ ስም", form_name_ph: "ሙሉ ስምዎ",
  form_phone: "ስልክ", form_phone_ph: "ስልክ ቁጥር",
  form_email: "ኢሜይል", form_email_ph: "you@email.com",
  form_date: "የሚፈለግ ቀን", form_time: "የሚፈለግ ሰዓት", form_time_ph: "ሰዓት ይምረጡ",
  form_time_morning: "ጠዋት (9–11 ጠዋት)", form_time_midday: "ቀን (11 ጠዋት–1 ከሰዓት)", form_time_afternoon: "ከሰዓት (1–4 ከሰዓት)",
  form_child_age: "የልጅ ዕድሜ", form_age_ph: "ዕድሜ ቡድን ይምረጡ",
  form_age_6_12: "6 – 12 ወር", form_age_1_2: "1 – 2 ዓመት", form_age_2_3: "2 – 3 ዓመት", form_age_unborn: "ገና አልተወለደም",
  form_submit: "ጉብኝቴን ይያዙ", form_confirm: "ጉብኝቱን በ24 ሰዓት ውስጥ እናረጋግጣለን።",
  info_address_label: "አድራሻ", info_address: "ሐዋሳ፣ ሲዳማ፣ ኢትዮጵያ",
  info_phone_label: "ስልክ", info_email_label: "ኢሜይል",
  info_hours_label: "ሰዓቶች", info_hours: "ሰኞ – አርብ፡ 7:00 ጠዋት – 6:00 ምሽት",
  footer_tagline: "ሕፃናት እና ቀን እንክብካቤ",
  footer_nav_home: "መነሻ", footer_nav_prog: "ፕሮግራሞች", footer_nav_admit: "ምዝገባ", footer_nav_cont: "አግኙን",
  footer_copyright: "© 2026 Rise and Shine ዳይኬር እና ቅድመ-መደበኛ ትምህርት ማዕከል። ሁሉም መብቶች የተጠበቁ ናቸው።",
  mobile_call: "ደውል", mobile_book: "ጉብኝት ይያዙ",
  }, // end am


  /* ═══════════════════════════════════════════════════════════
     SIDAAMU AFOO — ሲዳማ አፎ
  ═══════════════════════════════════════════════════════════ */
  sid: {
  lang_en: "EN", lang_am: "አማ", lang_sid: "ሲዳ",
  nav_home: "Bortaje", nav_programs: "Kaaishsha", nav_teachers: "Umiinke Loosanno",
  nav_facility: "Mittimanka", nav_reviews: "Xaadissanno", nav_admissions: "Mazarrantino",
  nav_book_tour: "Xawissanno Haanafi", nav_call_us: "Bilishsha",
  hero_welcome: "Rise and Shine Macciishshino Mittimanka Haranno Dancha Diinate",
  hero_headline: "Bare bare Borrote Noohu Xaa Ninkisi, Soqqama Ninkisi, Afirimanka Ninkisi",
  hero_sub: "Danga 6 Ardu – Danga 3 Ikkinni Bare bare Loosanni, Mittimankaho Ninkisi, Afirimankisi Xaadissannore.",
  hero_btn_tour: "Xawissanno Haanafi", hero_btn_call: "Bilishsha",
  trust_label: "Ninkini Lamini Hawagi", trust_heading: "Ninkisi Xaa Barete Ninkisi Gede",
  trust_licensed: "Macciishshino Gammadino", trust_ratio: "Loosanni – Borrote Qaaggino",
  trust_cpr: "CPR & Bortaje Hawagi", trust_background: "Hakkono Madino", trust_years: "Hawagisi Diro",
  programs_label: "Kaaishsha Mittimanke", programs_heading: "Bare bare Diro Ikkinni Hawagi",
  programs_sub: "Bare bare Kaaishsha Ninkisi Gede Bortaje Mittimanka Barete Hawagisi Ikkinni Xa'ino.",
  // Infants (6–12 months) — TODO: needs native Sidaamu Afoo translation
  prog_infant_title: "Infants", prog_infant_age: "6 – 12 months", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i1_label: "Feeding:", prog_infant_i1_text: "Provide appropriate complementary food and breastfeeding support.", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i2_label: "Hygiene:", prog_infant_i2_text: "Keep the baby, clothes, feeding materials, and sleeping area clean.", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i3_label: "Sleep:", prog_infant_i3_text: "Provide safe and comfortable rest and sleep.", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i4_label: "Development:", prog_infant_i4_text: "Talk, sing, smile, hold, and play with the baby.", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i5_label: "Movement:", prog_infant_i5_text: "Provide safe space for crawling, sitting, standing, and reaching.", // TODO: needs native Sidaamu Afoo translation
  prog_infant_i6_label: "Safety:", prog_infant_i6_text: "Closely supervise the baby and keep small or dangerous objects away.", // TODO: needs native Sidaamu Afoo translation
  // Young Toddlers (1–2 years) — TODO: needs native Sidaamu Afoo translation
  prog_young_title: "Young Toddlers", prog_young_age: "1 – 2 years", // TODO: needs native Sidaamu Afoo translation
  prog_young_i1_label: "Feeding:", prog_young_i1_text: "Provide nutritious meals and snacks and encourage self-feeding.", // TODO: needs native Sidaamu Afoo translation
  prog_young_i2_label: "Hygiene:", prog_young_i2_text: "Support handwashing, diapering/toileting, bathing, and clean clothing.", // TODO: needs native Sidaamu Afoo translation
  prog_young_i3_label: "Language:", prog_young_i3_text: "Talk, name objects, sing songs, and encourage simple words.", // TODO: needs native Sidaamu Afoo translation
  prog_young_i4_label: "Movement:", prog_young_i4_text: "Encourage walking, running, climbing, and simple physical play.", // TODO: needs native Sidaamu Afoo translation
  prog_young_i5_label: "Play:", prog_young_i5_text: "Provide simple toys, picture books, music, and safe exploration.", // TODO: needs native Sidaamu Afoo translation
  prog_young_i6_label: "Independence:", prog_young_i6_text: "Encourage children to do simple things by themselves.", // TODO: needs native Sidaamu Afoo translation
  // Toddlers (2–3 years) — TODO: needs native Sidaamu Afoo translation
  prog_toddler_title: "Toddlers", prog_toddler_age: "2 – 3 years", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i1_label: "Feeding:", prog_toddler_i1_text: "Provide balanced local foods and encourage children to eat independently.", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i2_label: "Hygiene:", prog_toddler_i2_text: "Teach handwashing, toilet use, and personal cleanliness.", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i3_label: "Language:", prog_toddler_i3_text: "Encourage speaking, listening, naming, and simple conversations.", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i4_label: "Learning through play:", prog_toddler_i4_text: "Use local materials, toys, songs, stories, drawing, and simple games.", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i5_label: "Social skills:", prog_toddler_i5_text: "Teach sharing, taking turns, greeting, and playing with others.", // TODO: needs native Sidaamu Afoo translation
  prog_toddler_i6_label: "Independence:", prog_toddler_i6_text: "Encourage dressing, eating, cleaning up, and other simple self-help activities.", // TODO: needs native Sidaamu Afoo translation
  // Preschool Age (3–4 years) — TODO: needs native Sidaamu Afoo translation
  prog_pre_title: "Preschool Age", prog_pre_age: "3 – 4 years", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i1_label: "Learning:", prog_pre_i1_text: "Introduce simple numbers, letters, colors, shapes, and everyday concepts.", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i2_label: "Language:", prog_pre_i2_text: "Develop speaking, listening, storytelling, and vocabulary.", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i3_label: "Social development:", prog_pre_i3_text: "Teach cooperation, sharing, respect, and following simple rules.", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i4_label: "Creativity:", prog_pre_i4_text: "Provide drawing, coloring, music, singing, storytelling, and role play.", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i5_label: "Physical development:", prog_pre_i5_text: "Provide outdoor play, running, jumping, balancing, and other physical activities.", // TODO: needs native Sidaamu Afoo translation
  prog_pre_i6_label: "School readiness:", prog_pre_i6_text: "Develop attention, participation, self-confidence, independence, and simple learning routines.", // TODO: needs native Sidaamu Afoo translation
  schedule_label: "Bare bare Kaaishsha", schedule_heading: "Bare Kiino Gede",
  schedule_sub: "Bare bare Loosanno, Xaadissanno, Roso, Gaamma Bortaje Xa'ino.",
  sched_arrival_time: "8:00 Worre", sched_arrival_title: "Haananno & Soqqama Dancha",
  sched_arrival_desc: "Gede Dancha, Soqqama Xa'ino, Ninkini Woluwa",
  sched_snack_time: "9:00 Worre", sched_snack_title: "Worre Makka & Soqqishsha",
  sched_snack_desc: "Ninkisi Makka, Gede Soqqishsha, Soqqama Kaaishsha",
  sched_play_time: "9:30 Worre", sched_play_title: "Xaadissanno & Loosanno",
  sched_play_desc: "Hawagi Xaadissanno, Hunca, Kiino, Afirima Kaaishsha",
  sched_outdoor_time: "10:15 Worre", sched_outdoor_title: "Gaalo Kaaishsha",
  sched_outdoor_desc: "Ninkisi Hawa, Loosanno Xaadissanno, Gara Afirima",
  sched_lunch_time: "11:30 Worre", sched_lunch_title: "Gaamma & Ninkisi",
  sched_lunch_desc: "Ninkisi Gaamma, Laxxi Xa'ino, Diyaparote Halchino",
  sched_nap_time: "12:30 Gaallo", sched_nap_title: "Roso Kaaishsha",
  sched_nap_desc: "Gede Kaaishsha, Ninkisi Xa'ino Roso",
  sched_afternoon_time: "2:30 Gaallo", sched_afternoon_title: "Gaallo Kaaishsha",
  sched_afternoon_desc: "Lexxo Xaadissanno, Puzzile, Qaaggino Kaaishsha, Lexxo",
  sched_pickup_time: "4:30 Gaallo", sched_pickup_title: "Heeshsho & Soqqama",
  sched_pickup_desc: "Ninkini Bare Kiino, Soqqama Xa'ino",
  safety_label: "Ninkisi & Xa'ino", safety_heading: "Ninkisi Gede Bare Bortaje",
  safety_sub: "Kaaishsha Bare bare Ninkisi, Xa'ino, Gaamma Ledo Gede Xa'ino.",
  tab_facility: "Mittimanka", tab_illness: "Hayye", tab_hygiene: "Ninkisi",
  tab_nutrition: "Gaamma", tab_nap: "Roso",
  fac_secure_title: "Ninkisi Haananno", fac_secure_desc: "Karde Haananno Video Interkom Ninkisi",
  fac_camera_title: "Kamera Xa'ino", fac_camera_desc: "Kaaishsha Wolu Kamera Ninkisi",
  fac_proof_title: "Borrote Ninkisi Xa'ino", fac_proof_desc: "Ledo Garda, Ninkisi Socket, Xa'ino Qaali",
  fac_drill_title: "Aaraara & Ninkisi", fac_drill_desc: "Kaaishsha Xa'ino & Aaraara Mittimanka",
  ill_check_title: "Bare bare Hayye Xa'ino", ill_check_desc: "Worre Worre Xa'ino Hayye Afirima",
  ill_excl_title: "Hayye Xa'ino Soorrate", ill_excl_desc: "Hayye Borrote 24 Saate Xa'ino Ikkinni Bortaje",
  ill_comm_title: "Ninkini Woluwa", ill_comm_desc: "Hayye Afirima Ninkini Worre Woluwa",
  ill_staff_title: "Loosanni Ninkisi", ill_staff_desc: "Loosanni Hayye Kaaishsha Xa'ino Ninkisi",
  hyg_hand_title: "Laxxi Xa'ino", hyg_hand_desc: "Gaamma Wolu, Diyaparote, Gaalo, Bare bare",
  hyg_san_title: "Bare bare Ninkisi", hyg_san_desc: "Xaadissanno, Xa'ino Wolu Bare bare Ninkisi",
  hyg_diaper_title: "Diyaparote Kaaishsha", hyg_diaper_desc: "Guunte, Ninkisi, Xa'ino Kaaishsha",
  hyg_air_title: "Hawa Xa'ino", hyg_air_desc: "Ninkisi Hawa & Wolu Hawa Xa'ino",
  nut_meals_title: "Ninkisi Gaamma", nut_meals_desc: "Worre, Gaamma, Gaallo Makka Bare bare Ninkisi",
  nut_allergy_title: "Allerji Xa'ino", nut_allergy_desc: "Gede Allerji Kaaishsha Xa'ino",
  nut_self_title: "Gede Soqqishsha", nut_self_desc: "Diro Ninkisi Soqqishsha Kaaishsha",
  nut_parent_title: "Ninkini Xa'ino", nut_parent_desc: "Ninkini Horoonsi, Formulara, Wolu Gaamma Xa'ino",
  nap_safe_title: "Ninkisi Roso", nap_safe_desc: "Kore Roso, Ninkisi Firaashi, Xa'ino Ledo",
  nap_monitor_title: "Kaaishsha Xa'ino", nap_monitor_desc: "Loosanni Roso Xa'ino Kaaishsha",
  nap_sched_title: "Gede Kaaishsha", nap_sched_desc: "Bare bare Gede Roso Kaaishsha Ninkisi",
  nap_calm_title: "Soqqama Xa'ino", nap_calm_desc: "Ledo Diro, Kiino Ledo, Ninkisi Roso Xa'ino",
  teachers_label: "Loosanke", teachers_heading: "Ninkisi Loosanni",
  teachers_sub: "Kaa Loosanno Afirima Ninkisi Loosanni Soqqama.",
  teacher1_role: "Borrote Loosanni", teacher1_creds: "CDA Xa'ino · 8 Diro",
  teacher2_role: "Bare Borrote Loosanni", teacher2_creds: "B.S. Kaa · 12 Diro",
  teacher3_role: "Borrote Xa'ino", teacher3_creds: "CPR Xa'ino · 5 Diro",
  teacher4_role: "Bare bare Loosanni", teacher4_creds: "M.A. Afirima · 10 Diro",
  facility_label: "Mittimanka", facility_heading: "Xawissanno",
  facility_sub: "Ninkisi, Xa'ino, Borrote Ninkisi Ikkinni — Bare bare Kaaishsha.",
  facility_tiktok_heading: "TikTok Gede", facility_tiktok_follow: "@riseandshine0 Kaaishsha Ninkisi.",
  facility_watch: "▶ TikTok Afiri", lightbox_close: "Cufi",
  reviews_label: "Xaadissanno", reviews_heading: "Ninkini Lowo",
  reviews_sub: "Ninkisi Bare bare Soqqama Xaadissanno.",
  review1_text: "Xawissanno Worre Ninkisi Xa'ino Afirima. Loosanni Borrote Sasu Dancha. Soqqama Ninkisi Xa'ino.",
  review1_author: "— Sara H.", review1_role: "Borrote Ninkini",
  review2_text: "Ninkisi Bare bare Soqqama Xaadissanno. Kiino Wolu Heeshsho Xa'ino.",
  review2_author: "— Daniel K.", review2_role: "Bare Borrote Ninkini",
  review3_text: "Xa'ino Ninkisi Gede. Haananno, Loosanni, Xa'ino Mittimanka — Loosanno Ninkisi Xa'ino.",
  review3_author: "— Tigist A.", review3_role: "Bare bare Borrote Ninkini",
  review4_text: "Bortaje Ninkini Soqqama Xa'ino. Loosanno Bare Soqqama Xaadissanno.",
  review4_author: "— Yonas & Liya B.", review4_role: "Borrote Ninkini",
  review5_text: "Kaaishsha Ninkisi — Hunca, Gaalo, Haro Kaaishsha. Loosanno Xa'ino Ninkisi Soqqama.",
  review5_author: "— Hana W.", review5_role: "Bare Borrote Ninkini",
  review6_text: "Ninkisi Borrote Soqqama Xa'ino. Bare bare Loosanno Xa'ino — Soqqama Ninkisi.",
  review6_author: "— Meron T.", review6_role: "Bare bare Borrote Ninkini",
  admissions_label: "Haanafi", admissions_heading: "Mazarrantino & Xa'ino",
  enroll_heading: "Mazarrantino Afiri",
  step1_title: "Xawissanno Haanafi", step1_desc: "Mittimanka Xawi, Loosanni Afiri, Kaaishsha Afiri.",
  step2_title: "Mazarrantino Afi", step2_desc: "Bare Ninkisi Mazarrantino Xa'ino.",
  step3_title: "Dancha & Soqqama", step3_desc: "Borrote Kaaishsha Xa'ino Afiri.",
  step4_title: "Dancha Heeshsho!", step4_desc: "Xa'ino Cufi, Worre Heeshsho, Soqqama Haanafi.",
  tuition_label: "Xa'ino:", tuition_contact: "Xa'ino Afiri Ninkisi Bilishsha.",
  faq_heading: "Lowo Xa'ino",
  faq1_q: "Loosanno Saate Xa'ino?", faq1_a: "Wossane – Aarbe 7:00 – 6:00 Bare bare Xa'ino.",
  faq2_q: "Gaamma & Makka Xa'ino?", faq2_a: "Ayi! Worre, Gaamma, Gaallo Makka Bare bare Ninkisi. Allerji Xa'ino.",
  faq3_q: "Ninkisi Bare Xa'ino?", faq3_a: "Diyaparote, Wiilani, Xa'ino Uduunni, Soqqama Xa'ino.",
  faq4_q: "Xa'ino Woyyaano Xa'ino?", faq4_a: "Diro Gede Xa'ino. Bilishsha Ninkisi Afiri.",
  faq5_q: "Baalisha Kaaishsha Xa'ino?", faq5_a: "Bare bare Xa'ino & Baalisha Xa'ino. Bilishsha Ninkisi.",
  faq6_q: "Borrote Haanafi Xa'ino?", faq6_a: "Ledo Xawissanno Xa'ino Haanafi. Soqqama Loosanni Afiri.",
  contact_label: "Xawissanno", contact_heading: "Xawissanno Haanafi",
  contact_sub: "Mittimanka Xawi, Loosanni Afiri, Kaaishsha Afiri.",
  form_parent_name: "Ninkini Sasu", form_name_ph: "Bare Sasu",
  form_phone: "Bilishsha", form_phone_ph: "Bilishsha Qaaggino",
  form_email: "Imeele", form_email_ph: "you@email.com",
  form_date: "Xa'ino Worre", form_time: "Xa'ino Saate", form_time_ph: "Saate Xa'ino",
  form_time_morning: "Worre (9–11)", form_time_midday: "Bare (11–1)", form_time_afternoon: "Gaallo (1–4)",
  form_child_age: "Borrote Diro", form_age_ph: "Diro Xa'ino",
  form_age_6_12: "6 – 12 Ardu", form_age_1_2: "1 – 2 Diro", form_age_2_3: "2 – 3 Diro", form_age_unborn: "Xa'ino Ikkinni",
  form_submit: "Xawissanno Haanafi", form_confirm: "24 Saate Xa'ino Ninkisi.",
  info_address_label: "Heeshsho", info_address: "Hawassa, Sidama, Ethiopia",
  info_phone_label: "Bilishsha", info_email_label: "Imeele",
  info_hours_label: "Saate", info_hours: "Wossane – Aarbe: 7:00 – 6:00",
  footer_tagline: "Borrote & Bare bare Xa'ino",
  footer_nav_home: "Bortaje", footer_nav_prog: "Kaaishsha", footer_nav_admit: "Mazarrantino", footer_nav_cont: "Bilishsha",
  footer_copyright: "© 2026 Rise and Shine Xa'ino. Bare bare Ninkisi.",
  mobile_call: "Bilishsha", mobile_book: "Xawissanno Haanafi",
  }, // end sid

}; // end translations


/* ═══════════════════════════════════════════════════════════
   LANGUAGE RUNTIME — Alpine v2 compatible
═══════════════════════════════════════════════════════════ */
window._lang = localStorage.getItem('lang') || 'en';

window.t = function(key) {
  var dict = translations[window._lang] || translations['en'];
  return (dict[key] !== undefined) ? dict[key] : (translations['en'][key] || key);
};

window.setLang = function(code) {
  window._lang = code;
  localStorage.setItem('lang', code);
  document.documentElement.lang = code;
  renderTranslations();
  document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === code);
  });
  window.dispatchEvent(new CustomEvent('langChanged', { detail: code }));
};

window.renderTranslations = function() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
};

document.addEventListener('DOMContentLoaded', function() {
  renderTranslations();
  var lang = window._lang;
  document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
});
