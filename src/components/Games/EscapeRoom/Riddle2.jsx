import React from 'react';

function Riddle2() {
    const code = `#include <stdio.h>

int main(void) {
    int total = 0;
    for (int i = 1; i <= 5; ++i) {
        total = total * 2 + i;
    }
    printf("%d", total);
}`;

    return (
        <pre className='mx-auto border-2 w-full text-sm overflow-x-auto p-3'>
            <code>{code}</code>
        </pre>
    );
}
export default Riddle2;
