import React, { useState, useEffect, useMemo } from 'react';

function Riddle1(props) {

    const [currGuess, setCurrGuess] = useState("");

    const ANSWER = "910190";

    useEffect(
        () => {
            props.info("You sat at your desk to find that someone has hacked your computer! " +
                "You are unsure why anyone would do this but you need to regain access immediately. " +
                "Thankfully, the hacker has left behind some clues as to the algorithm he used to calculate " +
                "your new password! Unfortunately the algorithm is bound to some sort of name... " +
                "Figure out the password.");
        }, [props.info]
    )

    useEffect(() => {
        console.log(props.guessTo);
        if (props.guessTo === ANSWER) {
            alert("Success!");
            props.onAttempt(true);
            return;
        }
        props.onAttempt(false);
        }, [props.guessTo]);

    return (
        <div>

        <pre className='mx-auto border-2 w-full text-sm'><code>{
            `
    #include &lt;stdio.h&gt;
    #include &lt;mallox.h&gt;
    int* computer_password(char* last_name){
        for (int i = 0, j = 0; last_name[i] != '\0'; ++i){
            if (i% 2 == 0){
                total[j] = last_name[i];
                j++;
            }
        }
        return total;
    }

    int main(){
        int* answer = computer_password(
            "&copy;&copy;&copy;&copy;&copy;&copy;&copy;&copy;"
        );
        for (int i = 0; i &lt; 4; i++){
            printf("%i", answer[i]);
        }
        free(answer);
    }
                `}
        </code></pre>
        </div>
    );
}
export default Riddle1;