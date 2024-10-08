import React from "react";
import { AudioOutput } from "../components/AudioComponents";
import { Template } from "../components/Template";
import { useRVCPage } from "../tabs/RVCParams";
import { RVCInputs } from "../components/RVCInputs";
import { GenerationHistorySimple } from "../components/GenerationHistory";

const RvcGenerationPage = () => {
  const {
    rvcGenerationParams,
    historyData,
    setHistoryData,
    handleChange,
    consumer,
    funcs,
  } = useRVCPage();

  return (
    <Template title="RVC">
      <div className="flex w-full flex-col">
        <RVCInputs
          rvcParams={rvcGenerationParams}
          handleChange={handleChange}
        />
        <div className="flex flex-col space-y-4">
          <button
            className="border border-gray-300 p-2 rounded hover:bg-gray-100"
            onClick={() => consumer(rvcGenerationParams)}
          >
            Convert
          </button>
          <AudioOutput
            audioOutput={historyData[0]?.audio}
            label="RVC Output"
            funcs={funcs}
            metadata={historyData[0]}
            filter={["sendToRvc", "sendToRvcVoiceGeneration"]}
          />
        </div>

        <GenerationHistorySimple
          name="rvc"
          setHistoryData={setHistoryData}
          historyData={historyData}
          funcs={funcs}
          nameKey={undefined}
          filter={["sendToRvc", "sendToRvcVoiceGeneration"]}
        />
      </div>
    </Template>
  );
};

export default RvcGenerationPage;
