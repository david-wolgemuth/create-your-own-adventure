import React from 'react';
import { Story, Choice, Page } from './story-lib';


export default class MyStory extends React.Component {
  render() {
    return ( 
      <Story 
        startsOnPage="choose-your-power" 
        endsOnPage="the-end"
      >
      
      
        {/* ------ Choose Your Power ------ */}
        <Page 
          name="choose-your-power" 
          content={(
            <div>
              <img alt="Wizard" src="https://cdn.pixabay.com/photo/2016/06/13/14/57/wizard-1454385__340.png" />
              <p>You meet a powerful wizard who gives you 2 choices</p>
              <p>"Would you like to learn to fly, or becoming invisible?"  He asks you</p>
            </div>
          )}
          choices={[
            <Choice label="Learn to Fly!" sendToPage="learn-to-fly" />,
            <Choice label="Become Invisible!" sendToPage="only-can-fly" />,
          ]}
        />
        
        
        
        {/* ------ Only Can Fly ------ */}
        <Page 
          name="only-can-fly" 
          content={(
            <div>
              <img alt="Embarrased Wizard" src="https://media.istockphoto.com/vectors/young-asian-blue-collar-worker-vector-illustration-confused-vector-id1164248622?b=1&k=6&m=1164248622&s=170667a&h=fmAIrr36zU715wDXni2HKGoWTbEx_h0KGzCMM45yijc=" />
              <p>"In truth, I can only teach people how to fly.." the wizard admits to you.</p>
            </div>
          )}
          choices={[
            <Choice label="Um.. Okay... Learn to Fly then?" sendToPage="learn-to-fly" />,
          ]}
        />
        
        
        
        {/* ------ Learn To Fly ------ */}
        <Page 
          name="learn-to-fly" 
          content={(
            <div>
              <img alt="Magic Wand" src="https://www.rockytoppubliclibrary.com/wp-content/uploads/2017/09/magic-clipart-Magic-Clip-Art.png" />
              <p>The wizard waves his wand at you, and you slowly begin to float</p>
            </div>
          )}
          choices={[
            <Choice label="Go Fly Around!!" sendToPage="fly-around" />,
            <Choice label="go sit at home :(" sendToPage="sit-at-home" />,
          ]}
        />
        
        
        
        {/* ------ Go Fly Around ------ */}
        <Page 
          name="fly-around" 
          content={(
            <div>
              <img alt="Flying Around" src="https://previews.123rf.com/images/iimages/iimages1802/iimages180200856/96263586-boy-in-hero-costume-flying-in-sky-illustration.jpg" />
              <p>You fly high up into the sky!</p>
            </div>
          )}
          choices={[
            <Choice label="Keep Flying" sendToPage="see-a-kitten" />,
            <Choice label="go sit at home :(" sendToPage="sit-at-home" />,
          ]}
        />
        
        
        
        {/* ------ See a Kitten ------ */}
        <Page 
          name="see-a-kitten" 
          content={(
            <div>
              <img alt="Kitten In Tree" src="https://cdn.clipart.email/8902a2c4556ed1987bc85b1e8822f3c8_cat-on-tree-drawception_300-250.png" />
              <p>You notice a kitten stuck in a tree, what do you do?</p>
            </div>
          )}
          choices={[
            <Choice label="Help the Kitten" sendToPage="kitten-scratch" />,
            <Choice label="Ignore the Kitten" sendToPage="fly-around" />,
          ]}
        />
        
        
        {/* ------ Kitten Scratches You ------ */}
        <Page 
          name="kitten-scratch" 
          content={(
            <div>
              <img alt="Crazy Cat" src="https://cdn.clipart.email/0b3aa3f86b418c5803125d0ed373a99f_crazy-cat-cartoon-spitting-and-scratching-clipart-vector-_425-470.jpeg" />
              <p>You reach to help the kitten, but it scratches you!</p>
            </div>
          )}
          choices={[
            <Choice label="Go Home" sendToPage="sit-at-home" />,
          ]}
        />
        
        
        
        {/* ------ Sit At Home ------ */}
        <Page 
          name="sit-at-home" 
          content={(
            <div>
              <img alt="Kid Thinking" src="https://thumbs.dreamstime.com/b/boy-thinking-white-background-illustration-173558762.jpg" />
              <p>You sit at home and think about your day</p>
            </div>
          )}
        />
        
        
        
        {/* ------ The End ------ */}
        <Page 
          name="the-end" 
          content={(
            <div>
              <h1>The End!</h1>
            </div>
          )}
          choices={[
            <Choice label="Start Over!" sendToPage="choose-your-power" />,
          ]}
        />
      </Story>
    );
  }
}

