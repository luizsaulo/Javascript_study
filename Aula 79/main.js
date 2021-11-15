function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);

// Lembrar que existe um limite para o máximo
