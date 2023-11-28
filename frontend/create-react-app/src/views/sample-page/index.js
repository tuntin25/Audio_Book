// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// ==============================|| SAMPLE PAGE ||============================== //

function SamplePage() {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <MainCard title="Sample Card">
        <Typography variant="body2">
          Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif ad
          minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
          reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
          qui officiate descent molls anim id est labours.
        </Typography>
      </MainCard>
      <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={() => SpeechRecognition.startListening({ language: 'vi-VN' })}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    </div>
  );
}

export default SamplePage;
