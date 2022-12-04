import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import { useState } from "react";
import RoulettePro, { PrizeType } from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import { Prize } from "../../interfaces/Prize";
import SubmitForm from "./submit-form";
import randomstring from "randomstring";

const prizes: Prize[] = [
  {
    code: "FREEQUARTERS",
    image: "/original.jpeg",
    text: "Free Quarters",
  },
  {
    code: "FREECHEESE",
    image: "/cheese.jpeg",
    text: "Free Cheese",
  },
  {
    code: "DOUBLEPATTY",
    image: "/patty.jpeg",
    text: "Double Patty",
  },
  {
    code: "HUNGARIANDUO",
    image: "/hungarianduo.jpeg",
    text: "Hungarian Duo",
  },
  {
    code: "B1T1",
    image: "/buy1take1.jpeg",
    text: "Buy One - Take One",
  },
];

const winPrizeIndex = 0;

const reproductionArray = (array: Prize[] = [], length = 0) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () => {
  return randomstring.generate(6);
};

const prizeList: Prize[] = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: generateId(),
}));

const Roulette = () => {
  const [start, setStart] = useState(false);
  const [isPrizeSelected, setIsPrizeSelected] = useState(false);
  const [claimId, setClaimId] = useState<string>("");
  const [prize, setPrize] = useState<Prize>();

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    setClaimId(generateId());
    setIsPrizeSelected(true);
    setPrize(prizeList[prizeIndex]);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={12}>
        <RoulettePro
          prizes={prizeList as PrizeType[]}
          prizeIndex={prizeIndex}
          start={start}
          spinningTime={3}
          soundWhileSpinning="https://react-roulette-pro.ivanadmaers.com/assets/f3722b4574da2a35a4ef.mp3"
          options={{ stopInCenter: true }}
          // defaultDesignOptions={{ prizesWithText: true }}
          onPrizeDefined={handlePrizeDefined}
        />
        <Dialog open={isPrizeSelected}>
          <DialogContent>
            <Grid container>
              {prize && <SubmitForm claimId={claimId} prize={prize} />}
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleStart}>
          Claim your Prize
        </Button>
      </Grid>
    </Grid>
  );
};

export default Roulette;
