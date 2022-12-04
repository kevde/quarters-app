import { Button, Dialog, DialogContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import RoulettePro, { PrizeType } from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import { Prize } from "../../interfaces/Prize";
import SubmitForm from "./submit-form";
import randomstring from "randomstring";
import _ from "lodash";

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

const generateId = () => {
  return randomstring.generate(6);
};

const randomizePrizes = (): Prize[] => {
  return _.map(
    _.shuffle([
      ..._.times(1, () => prizes[0]),
      ..._.times(8, () => prizes[1]),
      ..._.times(3, () => prizes[2]),
      ..._.times(2, () => prizes[3]),
      ..._.times(1, () => prizes[4]),
    ]),
    (prize) => {
      return {
        id: generateId(),
        ...prize,
      };
    }
  );
};

const Roulette = () => {
  const [start, setStart] = useState(false);
  const [isPrizeSelected, setIsPrizeSelected] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);
  const [claimId, setClaimId] = useState<string>("");
  const [prizeList, setPrizeList] = useState<Prize[]>([]);
  const [prizeCount, setPrizeCount] = useState<number>(0);

  useEffect(() => {
    const randomList = randomizePrizes();
    setPrizeCount(randomList.length);
    setPrizeList([...randomList, ...randomList, ...randomList]);
  }, []);

  const handleStart = () => {
    setStart((prevState) => !prevState);
    const currentIndex = prizeCount + _.random(0, prizeCount - 1);
    setPrizeIndex(currentIndex);
  };

  const handlePrizeDefined = () => {
    setClaimId(generateId());
    setIsPrizeSelected(true);
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
          options={{ stopInCenter: true, withoutAnimation: false }}
          // defaultDesignOptions={{ prizesWithText: true }}
          onPrizeDefined={handlePrizeDefined}
        />
        <Dialog open={isPrizeSelected}>
          <DialogContent>
            <Grid container>
              {prizeList[prizeIndex] && (
                <SubmitForm claimId={claimId} prize={prizeList[prizeIndex]} />
              )}
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
