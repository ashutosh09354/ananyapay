// ⚠️ EDIT EVERYTHING MARKED "VERIFY" before publishing. Nothing here is verified business data.
export const business = {
  name: 'Ananya Enterprise',
  phoneDisplay: '+91 95124 77886',
  phoneE164: '+919512477886',        // used for tel:
  whatsapp: '919512477886',          // country code, no +
  email: '',                         // optional
  hours: 'Mon–Sat, 10:00 AM – 7:00 PM', // VERIFY
  siteUrl: 'https://ananya-enterprise.vercel.app', // VERIFY
};
export const enquiry = (t) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(t)}`;
export const telLink = `tel:${business.phoneE164}`;

export const services = [
  {slug:'card-payment-assistance',title:'Card Payment Assistance',icon:'card',short:'Guidance on making card payments correctly and safely.',
   intro:'Not sure how to complete a card payment, or want a second pair of eyes before you pay? We walk you through the steps in plain language.',
   help:['Understanding the payment steps','Checking details before you pay','Explaining applicable charges upfront','Help if a payment does not go through as expected'],
   msg:'Hello Ananya Enterprise, I would like to enquire about Card Payment Assistance.'},
  {slug:'credit-card-bill-payment',title:'Credit Card Bill Payment Support',icon:'bill',short:'Help understanding and completing your credit card bill payment.',
   intro:'Credit card bills have due dates, minimum amounts and statement cycles. We help you understand what is due and the options to pay it.',
   help:['Reading your statement: total due, minimum due, due date','Explaining the available ways to pay','Charges explained before you proceed','Reminders on what to keep ready'],
   msg:'Hello Ananya Enterprise, I would like to enquire about Credit Card Bill Payment Support.'},
  {slug:'bank-transfer-support',title:'Bank Transfer Support',icon:'bank',short:'Assistance with bank transfers through authorised channels.',
   intro:'From adding a beneficiary to choosing between transfer modes, we help you complete a bank transfer with confidence.',
   help:['Choosing the right transfer mode','Checking beneficiary details','Understanding timelines and limits','Explaining applicable charges upfront'],
   msg:'Hello Ananya Enterprise, I would like to enquire about Bank Transfer Support.'},
  {slug:'credit-card-guidance-emi',title:'Credit Card Guidance & EMI Information',icon:'emi',short:'General information on credit cards and EMI options.',
   intro:'Thinking about a credit card or converting a purchase to EMI? We share general information so you can ask the right questions of your bank.',
   help:['How credit cards and billing cycles work','What EMI conversion generally involves','Questions to ask your bank or issuer','Understanding interest and fees at a high level'],
   msg:'Hello Ananya Enterprise, I would like information on Credit Card Guidance and EMI.'},
];
export const commonNotes = ['We do not guarantee transaction success, credit approval or any financial outcome.','Charges are shared before you proceed.','We never ask for your OTP, PIN, CVV or banking passwords.'];
export const reasons = [ // VERIFY each claim is true for your business
  ['Transparent charges','Charges are explained before you proceed.'],
  ['Professional support','Courteous help from our team during working hours.'],
  ['Clear communication','Plain-language answers to your questions.'],
  ['Personalised assistance','Guidance matched to your specific requirement.'],
];
export const steps = [['Contact Us','Call or message us on WhatsApp.'],['Share Your Requirement','Tell us what you need help with.'],['Get Assistance','We explain the process and applicable charges.'],['Complete Your Payment','Finish your payment as agreed.']];
// Add ONLY genuine, approved reviews: {name:'', text:'', date:''}. Section hides while empty.
export const reviews = [];
export const faqs = [ // VERIFY answers
  ['What services do you offer?','Card payment assistance, credit card bill payment support, bank transfer support, and credit card/EMI guidance.'],
  ['What are your charges?','Charges depend on the service and are shared with you before you proceed. Please contact us for current details.'],
  ['How does the payment process work?','Contact us, share your requirement, and we guide you through the steps. Process details may vary by service.'],
  ['Who is eligible?','Eligibility depends on the service and applicable bank or card-issuer rules. Ask us about your case.'],
  ['Do you guarantee approvals or success?','No. We do not guarantee transaction success, credit approval or any financial outcome.'],
  ['Will you ask for my OTP, PIN, CVV or password?','Never. Do not share these with anyone, including us.'],
  ['How can I reach customer support?','Call or WhatsApp us during working hours listed in the Contact section.'],
];
// 
