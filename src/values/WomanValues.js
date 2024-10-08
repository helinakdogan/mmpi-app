export const wQuestionValues = {    
    0:0, 30: 50, 40: 53, 50: 56.1, 60: 58, 70: 61, 80: 63.8, 90: 66, 100: 68.7,
    110: 72, 120: 76, 130: 80, 566: 120
};

// Mevcut anahtarları sırala
const keys = Object.keys(wQuestionValues).map(Number).sort((a, b) => a - b);

// Mevcut anahtarlar arasında eksik olanları hesaplayıp güncelle
for (let i = 0; i < keys.length - 1; i++) {
    let startX = keys[i];
    let endX = keys[i + 1];
    let startY = wQuestionValues[startX];
    let endY = wQuestionValues[endX];

    // İki mevcut nokta arasındaki her bir x değeri için y hesapla
    for (let x = startX + 1; x < endX; x++) {
        // Virgülden sonra 2 basamağa yuvarla
        const y = Number((startY + ((x - startX) / (endX - startX)) * (endY - startY)).toFixed(2));
        wQuestionValues[x] = y;  // Orijinal objeyi güncelle
    }
}


export const wLValues = {
    1: 28.2, 2: 36.3, 3: 38.5, 4: 40, 5: 42.4, 6: 50, 7: 55.5, 8: 59.3,
    9: 64, 10: 68.1, 11: 73, 12: 77, 13: 82, 14: 86.1, 15: 90
}

export const wFValues = {
    1: 32.5, 2: 36.2, 3: 38.1, 4: 40, 5: 42.2, 6: 44.1, 7: 45.5, 8: 47.3,
    9: 49.4, 10: 51.2, 11: 53.2, 12: 55.1, 13: 57.2, 14: 59, 15: 61.1,
    16: 63.1, 17: 65.4, 18: 66.1, 19: 68.1, 20: 70, 21: 72.1, 22: 74.1,
    23: 76.1, 24: 78.1, 25: 80, 26: 82.1, 27: 84.1, 28: 86.1, 29: 87.1,
    30: 89, 31: 91, 32: 93.1, 33: 95.2, 34: 97, 35: 99, 36:101, 37:103, 38:106, 39:108, 40:110, 41:112, 42:114, 43:116, 44:117, 45:119, 46:120, 47:120, 48:120, 49:120, 50:120, 51:120, 52:120, 53:120, 54:120, 55:120, 56:120, 57:120, 58:120, 59:120, 60:120, 61:120, 62:120, 63:120, 64:120
}

export const wKValues = {
    1: 22.5, 2: 24.5, 3: 27.5, 4: 30, 5: 32, 6: 35, 7: 38.5, 8: 40,
    9: 43.5, 10: 45.5, 11: 48.2, 12: 51.2, 13: 53.5, 14: 56.6, 15: 58.3,
    16: 61.2, 17: 64.5, 18: 66.5, 19: 69, 20: 71.9, 21: 74.1, 22: 77.3,
    23: 79.2, 24: 82.2, 25: 84.1, 26: 87, 27: 90, 28: 92, 29: 95.4,
    30: 98.1
}

export const wHsValues = {
    2: 21.2, 3: 23.2, 4: 25.5, 5: 27.2, 6: 29, 7: 31.1, 8: 33.4, 9: 35.5,
    10: 37.1, 11: 39.1, 12: 41.2, 13: 43.2, 14: 45.5, 15: 48.4, 16: 50, 17: 52.2,
    18: 54.2, 19: 56.3, 20: 58.1, 21: 60, 22: 62, 23: 64.1, 24: 66, 25: 68,
    26: 70, 27: 72.2, 28: 74, 29: 76, 30: 78, 31: 78, 32: 83.1, 33: 85.2,
    34:87, 35:89, 36:91, 37:93, 38:95, 39:97, 40:99, 41:101, 42:103, 43:106, 44:108, 45:109, 46:111, 47:113, 48:116   
}

export const wDValues = {
    7: 21, 8: 23, 9: 25.2, 10: 26.1, 11: 29, 12: 30, 13: 32, 14: 33, 15: 35,
    16: 37.2, 17: 39, 18: 40, 19: 42, 20: 44.2, 21: 45.3, 22: 47.1, 23: 49.2,
    24: 51, 25: 52, 26: 54.2, 27: 56.2, 28: 58.5, 29: 59.2, 30: 61, 31: 62.9,
    32: 65.2, 33: 66.2, 34: 68.5, 35: 70, 36: 72.5, 37: 74.2, 38: 75.2, 39: 77.5,
    40: 79.1, 41: 80, 42: 82, 43: 84.5, 44: 85.2, 45: 87, 46: 89.9, 47: 91.2,
    48: 92, 49: 94, 50: 96.2, 51: 98, 52: 99, 53: 101, 54: 103.6, 55: 105.2,
    56: 106.2, 57: 108.2, 58: 110, 59: 112, 60: 113.2
}

export const wHyValues = {
    7: 21.1, 8: 23.2, 9: 25.1, 10: 27.2, 11: 30, 12: 31, 13: 33, 14: 34.5,
    15: 36.5, 16: 38.1, 17: 40, 18: 42, 19: 44.2, 20: 46.6, 21: 48.5,
    22: 49, 23: 51, 24: 53.3, 25: 55.5, 26: 57.4, 27: 59, 28: 61,
    29: 62, 30: 64, 31: 66.2, 32: 68.2, 33: 70, 34: 72.1, 35: 74.2,
    36: 76.4, 37: 77.3, 38: 79.5, 39: 81, 40: 83, 41: 85.2, 42: 87,
    43: 89, 44: 91, 45: 94.3, 46: 93.8, 47: 96, 48: 98, 49: 100,
    50: 102, 51: 104, 52: 106, 53: 107.2, 54: 109, 55: 111,
    56:113, 57:115, 58:117, 59:119, 60:120    
}

export const wPdValues = {
    9: 21, 10: 23, 11: 25, 12: 27, 13: 29, 14: 31, 15: 34, 16: 36.2,
    17: 38.3, 18: 40, 19: 42, 20: 44.2, 21: 46.1, 22: 48.1, 23: 50,
    24: 52, 25: 55.8, 26: 57, 27: 59, 28: 61, 29: 63.3, 30: 65.1,
    31: 66.5, 32: 68.1, 33: 71.5, 34: 73, 35: 75.5, 36: 78, 37: 80,
    38: 82, 39: 84.2, 40: 86, 41: 88, 42: 90, 43: 92, 44: 94,
    45: 96, 46: 99, 47: 101, 48: 103.2, 49: 105.5, 50: 107,
    51:109, 52:111, 53:112, 54:114, 55:116, 56:118, 57:119, 58:120, 59:120, 60:120, 61:120, 62:120
}

export const wMfValues = {
    0:101, 1: 100, 2: 99, 3:97, 4:96.4, 5:95, 6:93, 7:92, 8:91, 9: 89, 10: 88, 11: 87.2, 12: 85, 13: 84, 14: 83, 15: 81,
    16: 80, 17: 79, 18: 77, 19: 76, 20: 75.5, 21: 73, 22: 72.1, 23: 71,
    24: 69, 25: 68.2, 26: 67.3, 27: 65.5, 28: 64, 29: 63, 30: 61, 31: 60,
    32: 58, 33: 55, 34: 53, 35: 51, 36: 49.2, 37: 46.2, 38: 44, 39: 42.5,
    40: 40, 41: 38.2, 42: 36, 43: 33, 44: 31, 45: 29, 46: 27.5, 47: 25.1, 48: 24.2,
    49: 22, 50: 20, 51: 18, 52: 16, 53: 14, 54: 12, 55: 10, 56: 8, 57: 6, 58: 4, 59: 2, 60: 1
}

export const wPaValues = {
    1: 24, 2: 27, 3: 29, 4: 31, 5: 33.6, 6: 36, 7: 38, 8: 41, 9: 43.2, 10: 45, 11: 48, 12: 50, 13: 52, 14: 55,
    15: 56.8, 16: 59, 17: 62, 18: 64, 19: 66, 20: 68, 21: 71,
    22: 72.8, 23: 75, 24: 77.8, 25: 80, 26: 82, 27: 85, 28: 87,
    29: 89, 30: 92, 31: 94, 32: 96, 33: 99, 34: 101, 35: 103,
    36: 106, 37: 108, 38: 110, 39: 113, 40: 114.9    
}

export const wPtValues = {
    10: 20, 11: 21, 12: 23, 13: 24, 14: 24.1,
    15: 27, 16: 29, 17: 30, 18: 32, 19: 33, 20: 35, 21: 36,
    22: 38.2, 23: 39, 24: 41, 25: 42, 26: 44, 27: 45, 28: 47,
    29: 49, 30: 50, 31: 52, 32: 53, 33: 55, 34: 56, 35: 57.8,
    36: 58.9, 37: 61, 38: 62, 39: 63.7, 40: 65, 41: 67, 42: 68,
    43: 70, 44: 71, 45: 73, 46: 74, 47: 76, 48: 77, 49: 79,
    50: 81, 51: 82, 52: 84, 53: 85, 54: 87, 55:88, 56:90, 57:91, 58:93, 59:95, 60:97, 61:100, 62:102, 63:103, 64:105, 65:107, 66:110, 67:112, 68:114, 69:116, 70:118, 71:120, 72:120, 73:120, 74:120, 75:120, 76:120, 77:120, 78:120
}

export const wScValues = {
    7: 1, 8: 22, 9: 23, 10: 25, 11: 26, 12: 27, 13: 28, 14: 29,
    15: 31, 16: 32, 17: 33, 18: 34, 19: 35, 20: 37, 21: 38,
    22: 39, 23: 40, 24: 41, 25: 43, 26: 43.8, 27: 45, 28: 46,
    29: 47, 30: 49, 31: 50, 32: 51, 33: 51.8, 34: 54, 35: 55,
    36: 56, 37: 57, 38: 58, 39: 60, 40: 61, 41: 61.8, 42: 63,
    43: 64, 44: 66, 45: 67, 46: 68, 47: 69, 48: 70, 49: 72,
    50: 73, 51: 74, 52: 75, 53: 76, 54: 78, 55: 79, 56: 80, 57: 81, 58: 82,
    59: 84, 60: 85, 61: 86, 62: 87, 63: 88, 64: 90, 65: 91, 66: 92, 67: 93,
    68: 94, 69: 96, 70: 97, 71: 98, 72: 99, 73: 100, 74: 102, 75:103, 76:104, 77:105, 78:106, 79:107, 80:108, 81:110, 82:111, 83:113, 84:114, 85:116, 86:118, 87:119, 88:120, 89:120, 90:120, 91:120, 92:120, 93:120, 94:120, 95:120, 96:120, 97:120, 98:120, 99:120, 100:120, 101:120, 102:120, 103:120, 104:120, 105:120, 106:120, 107:120, 108:120
}

export const wMaValues = {
    7: 22, 8: 24, 9: 26, 10: 28, 11: 30, 12: 33, 13: 35, 14: 37,
    15: 39, 16: 42, 17: 44, 18: 46, 19: 48, 20: 51, 21: 53,
    22: 55, 23: 57, 24: 59, 25: 62, 26: 64, 27: 66, 28: 68,
    29: 70, 30: 73, 31: 75, 32: 76, 33: 79, 34: 82, 35: 84,
    36: 86, 37: 88, 38: 91, 39: 93, 40: 95, 41: 97, 42: 100,
    43: 102, 44: 104, 45:106, 46:108, 47:110, 48:112, 49:114, 50:116, 51:118, 52:120
}

export const wSiValues = {
    7: 20, 8: 21, 9: 23, 10: 24, 11: 25, 12: 27, 13: 28, 14: 29,
    15: 31, 16: 32, 17: 33, 18: 34, 19: 36, 20: 37, 21: 38,
    22: 40, 23: 41, 24: 42, 25: 44, 26: 45, 27: 46, 28: 47,
    29: 49, 30: 50, 31: 51, 32: 53, 33: 54, 34: 55, 35: 57,
    36: 58, 37: 59, 38: 60, 39: 62, 40: 63, 41: 64, 42: 66,
    43: 67, 44: 68, 45: 70, 46: 71, 47: 72, 48: 73, 49: 75,
    50: 76, 51: 77, 52: 79, 53: 80, 54: 81, 55: 83, 56: 84, 57: 85, 58: 86,
    59: 88, 60: 89, 61: 90, 62: 92, 63: 93, 64: 94, 65: 96, 66: 97, 67: 98,
    68: 99, 69: 101, 70: 102, 71:103, 72:105, 73:106, 74:107, 75:109, 76:111, 77:113, 78:115, 79:116, 80:118, 81:119, 82:121, 83:121, 84:121
}