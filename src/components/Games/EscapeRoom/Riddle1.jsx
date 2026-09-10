import React from 'react';

function Riddle1() {
    const code = `#include <stdio.h>

void computer_password(const char *last_name, char *out) {
    for (int i = 0, j = 0; last_name[i] != '\\0'; ++i) {
        if (i % 2 == 0) {
            out[j++] = last_name[i];
        }
    }
}

int main(void) {
    char answer[8] = {0};
    computer_password("ZEIDAN", answer);
    printf("%s", answer);
}`;

    return (
        <pre className='mx-auto border-2 w-full text-sm overflow-x-auto p-3'>
            <code>{code}</code>
        </pre>
    );
}
export default Riddle1;
