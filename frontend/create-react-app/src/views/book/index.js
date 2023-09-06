// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// dummy data
const DummyBook = {
  id: 1,
  name: 'Dark Nhan Tam',
  author: 'Me',
  description: 'Buy ingredients to prepare dinner',
};

// ==============================|| SAMPLE PAGE ||============================== //

const Book = () => (
  <MainCard title={DummyBook.name}>
    {/* <Typography variant="body2">
      Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
      minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in reprehended
      in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa qui officiate
      descent molls anim id est labours.
    </Typography> */}
    <Typography variant="body2">
      {DummyBook.description}
    </Typography>
  </MainCard>
);

export default Book;
