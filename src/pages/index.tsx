import RadioButtons from "src/components/Radio";
import ContainedButtons from "src/components/Button";
import React from "react";
import { RadioButtan } from "src/interfaces/RadioButton";
import { GetStaticProps } from "next";
import { genderList } from '../utils/gender'
import { workReqList } from '../utils/workReq'
import { manuscriptFlagList } from '../utils/manuscriptFlag'
import { wordCountList } from "src/utils/wordCount";

type Props = {
  genderData: RadioButtan[];
  workReqData: RadioButtan[];
  manuscriptFlagData: RadioButtan[];
  wordCountData: RadioButtan[]
}
const IndexPage = ({ genderData, workReqData, manuscriptFlagData, wordCountData }: Props) => (
  <div>
    <header className='header'>
    </header>
    <div className='container'>
      <div className='line'>
        <div className='title'>作成依頼の項目</div>
        <RadioButtons List={workReqData} ></RadioButtons>
      </div>
      <div className='line'>
        <div className='title'>漫画動画制作</div>
        <RadioButtons List={manuscriptFlagData} ></RadioButtons>
      </div>
      <div className='line'>
        <div className='title'>文字数</div>
        <RadioButtons List={wordCountData} ></RadioButtons>
      </div>
      <div className='line'>
        <div className='title'>性別</div>
        <RadioButtons List={genderData} ></RadioButtons>
      </div>
    </div>
    <ContainedButtons></ContainedButtons>
    <footer className='footer'>
      <div></div>
    </footer>
  </div>
)
export const getStaticProps: GetStaticProps = async () => {
  const genderData: RadioButtan[] = genderList;
  const workReqData: RadioButtan[] = workReqList;
  const manuscriptFlagData: RadioButtan[] = manuscriptFlagList;
  const wordCountData: RadioButtan[] = wordCountList;
  return { props: { genderData, workReqData, manuscriptFlagData, wordCountData } }
}
export default IndexPage