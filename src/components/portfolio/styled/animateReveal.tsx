import posed from "react-pose";

const configRevealImage = {
  open: {
    width: "100%",
    transition: {
      stiffness: 500,
      duration: 300,
    },
  },
  closed: {
    width: "0%",
    transition: {
      stiffness: 500,
      delay: 200,
      duration: 500,
    },
  },
};

export const RevealImage = posed.div(configRevealImage);

const configRevealText = {
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      stiffness: 500,
      delay: 200,
      duration: 500,
    },
  },
  closed: {
    opacity: 0,
    x: 0,
    y: "50px",
    transition: {
      stiffness: 500,
      delay: 200,
      duration: 500,
    },
  },
  hide: {
    opacity: 0,
    x: 0,
    y: "-50px",
    transition: {
      stiffness: 500,
      delay: 200,
      duration: 500,
    },
  },
};

export const RevealText = posed.div(configRevealText);
