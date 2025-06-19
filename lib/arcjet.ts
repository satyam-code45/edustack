import arcjet, {
  detectBot,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  fixedWindow,
} from "@arcjet/next";

export {
  detectBot,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  fixedWindow,
};

export default arcjet({
  key: process.env.ARCJET_KEY!,
  characteristics: ["fingerprint"],
  rules: [
    shield({
        mode:"LIVE"
    })
  ],
});
