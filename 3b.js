var size = 1000;
var total = 0;
var jo = 0;
var i4;
var a = [];
var v = ["#1 @ 146,196: 19x14", "#2 @ 641,817: 27x28", "#3 @ 604,922: 11x17", "#4 @ 323,671: 19x17", "#5 @ 885,701: 18x27", "#6 @ 636,818: 18x14", "#7 @ 165,289: 22x12", "#8 @ 431,568: 16x23", "#9 @ 490,861: 24x25", "#10 @ 529,203: 10x21", "#11 @ 594,338: 18x26", "#12 @ 772,19: 27x28", "#13 @ 507,629: 23x26", "#14 @ 257,387: 29x19", "#15 @ 21,553: 10x13", "#16 @ 979,609: 10x19", "#17 @ 227,159: 13x23", "#18 @ 588,359: 22x15", "#19 @ 466,456: 10x18", "#20 @ 659,166: 25x16", "#21 @ 519,590: 14x12", "#22 @ 125,80: 21x18", "#23 @ 915,145: 21x14", "#24 @ 245,510: 25x23", "#25 @ 247,662: 26x20", "#26 @ 549,725: 22x12", "#27 @ 353,258: 16x29", "#28 @ 485,172: 28x10", "#29 @ 308,562: 17x17", "#30 @ 586,318: 11x12", "#31 @ 890,928: 20x13", "#32 @ 614,596: 29x20", "#33 @ 468,147: 15x23", "#34 @ 806,441: 18x24", "#35 @ 416,517: 26x26", "#36 @ 98,622: 16x29", "#37 @ 929,411: 22x25", "#38 @ 935,464: 27x21", "#39 @ 26,452: 12x15", "#40 @ 595,454: 15x21", "#41 @ 23,677: 14x11", "#42 @ 762,918: 13x16", "#43 @ 311,886: 13x29", "#44 @ 585,653: 22x10", "#45 @ 604,108: 15x13", "#46 @ 344,46: 13x11", "#47 @ 290,285: 25x24", "#48 @ 332,616: 23x20", "#49 @ 568,363: 20x15", "#50 @ 643,370: 18x16", "#51 @ 352,554: 14x25", "#52 @ 489,37: 26x23", "#53 @ 155,714: 19x15", "#54 @ 421,219: 23x19", "#55 @ 818,194: 18x13", "#56 @ 75,592: 29x29", "#57 @ 225,963: 26x24", "#58 @ 598,699: 27x19", "#59 @ 21,575: 10x10", "#60 @ 247,676: 28x26", "#61 @ 966,376: 11x10", "#62 @ 280,310: 12x13", "#63 @ 771,215: 29x18", "#64 @ 857,95: 16x17", "#65 @ 696,567: 16x14", "#66 @ 804,322: 15x24", "#67 @ 272,396: 12x29", "#68 @ 613,606: 22x10", "#69 @ 848,938: 22x27", "#70 @ 300,643: 12x23", "#71 @ 756,61: 27x25", "#72 @ 386,231: 25x17", "#73 @ 559,105: 19x29", "#74 @ 597,109: 28x12", "#75 @ 397,138: 16x10", "#76 @ 37,691: 10x23", "#77 @ 17,702: 21x18", "#78 @ 738,82: 17x10", "#79 @ 516,200: 23x14", "#80 @ 34,48: 15x16", "#81 @ 555,322: 11x22", "#82 @ 84,648: 28x15", "#83 @ 549,744: 13x13", "#84 @ 147,344: 22x12", "#85 @ 378,215: 28x18", "#86 @ 726,620: 16x18", "#87 @ 800,599: 15x20", "#88 @ 128,858: 23x28", "#89 @ 31,271: 10x28", "#90 @ 671,75: 28x18", "#91 @ 279,425: 19x21", "#92 @ 145,76: 10x13", "#93 @ 419,600: 27x28", "#94 @ 69,400: 25x20", "#95 @ 580,309: 21x22", "#96 @ 933,544: 28x18", "#97 @ 854,524: 22x15", "#98 @ 668,574: 16x25", "#99 @ 322,416: 21x21", "#100 @ 371,716: 23x20", "#101 @ 639,429: 11x26", "#102 @ 561,698: 12x15", "#103 @ 222,344: 12x23", "#104 @ 929,671: 21x11", "#105 @ 901,233: 24x19", "#106 @ 135,238: 15x29", "#107 @ 727,794: 16x23", "#108 @ 700,103: 15x18", "#109 @ 375,762: 21x14", "#110 @ 514,666: 20x10", "#111 @ 465,148: 14x17", "#112 @ 388,181: 24x18", "#113 @ 457,310: 13x13", "#114 @ 83,142: 17x26", "#115 @ 442,271: 23x23", "#116 @ 30,551: 15x10", "#117 @ 477,420: 16x26", "#118 @ 853,534: 11x25", "#119 @ 612,692: 29x25", "#120 @ 322,557: 10x15", "#121 @ 119,759: 11x10", "#122 @ 469,281: 25x13", "#123 @ 232,458: 24x14", "#124 @ 887,251: 19x14", "#125 @ 270,398: 12x20", "#126 @ 906,657: 18x13", "#127 @ 300,54: 16x16", "#128 @ 87,498: 19x28", "#129 @ 113,617: 29x19", "#130 @ 501,636: 21x12", "#131 @ 110,505: 23x17", "#132 @ 156,262: 16x28", "#133 @ 30,879: 25x20", "#134 @ 966,232: 14x23", "#135 @ 785,913: 14x19", "#136 @ 558,202: 26x11", "#137 @ 963,444: 14x10", "#138 @ 531,537: 16x28", "#139 @ 421,323: 25x23", "#140 @ 73,105: 29x14", "#141 @ 979,617: 14x18", "#142 @ 7,559: 15x29", "#143 @ 852,404: 14x19", "#144 @ 638,95: 10x14", "#145 @ 290,486: 12x27", "#146 @ 589,818: 24x23", "#147 @ 245,844: 13x13", "#148 @ 64,663: 12x18", "#149 @ 439,459: 27x26", "#150 @ 962,777: 15x14", "#151 @ 243,560: 13x28", "#152 @ 85,813: 26x10", "#153 @ 85,808: 14x16", "#154 @ 579,284: 11x20", "#155 @ 832,703: 21x23", "#156 @ 299,578: 26x28", "#157 @ 194,539: 25x25", "#158 @ 634,576: 15x16", "#159 @ 790,688: 10x21", "#160 @ 507,247: 28x26", "#161 @ 181,278: 10x18", "#162 @ 756,815: 26x12", "#163 @ 533,450: 19x23", "#164 @ 905,643: 26x12", "#165 @ 497,161: 14x18", "#166 @ 406,168: 24x22", "#167 @ 727,120: 20x10", "#168 @ 800,555: 14x22", "#169 @ 277,399: 13x13", "#170 @ 928,426: 29x13", "#171 @ 927,961: 16x21", "#172 @ 348,499: 16x11", "#173 @ 561,927: 10x17", "#174 @ 701,671: 19x12", "#175 @ 56,339: 18x13", "#176 @ 929,761: 16x24", "#177 @ 367,228: 4x4", "#178 @ 451,919: 16x13", "#179 @ 41,885: 10x12", "#180 @ 687,59: 23x13", "#181 @ 285,377: 16x20", "#182 @ 818,801: 14x18", "#183 @ 255,641: 25x25", "#184 @ 474,672: 20x18", "#185 @ 283,401: 3x8", "#186 @ 781,19: 12x12", "#187 @ 482,965: 28x28", "#188 @ 941,472: 17x26", "#189 @ 770,57: 19x20", "#190 @ 296,151: 12x25", "#191 @ 0,328: 17x18", "#192 @ 247,462: 15x23", "#193 @ 582,602: 24x27", "#194 @ 24,715: 23x24", "#195 @ 901,178: 11x16", "#196 @ 482,533: 16x20", "#197 @ 404,184: 15x13", "#198 @ 50,915: 21x20", "#199 @ 136,449: 25x16", "#200 @ 491,975: 15x10", "#201 @ 737,451: 19x29", "#202 @ 192,46: 21x15", "#203 @ 562,316: 18x22", "#204 @ 326,586: 15x16", "#205 @ 448,117: 16x20", "#206 @ 634,875: 17x28", "#207 @ 716,737: 24x19", "#208 @ 907,711: 24x14", "#209 @ 745,361: 22x21", "#210 @ 254,644: 6x9", "#211 @ 342,931: 25x18", "#212 @ 234,169: 13x16", "#213 @ 134,905: 20x12", "#214 @ 735,577: 17x10", "#215 @ 953,804: 23x19", "#216 @ 969,630: 23x25", "#217 @ 681,443: 11x11", "#218 @ 338,296: 13x24", "#219 @ 780,699: 17x28", "#220 @ 721,598: 23x23", "#221 @ 426,135: 23x20", "#222 @ 367,526: 19x29", "#223 @ 626,893: 24x14", "#224 @ 446,268: 21x19", "#225 @ 470,108: 22x21", "#226 @ 977,7: 13x25", "#227 @ 835,111: 29x26", "#228 @ 196,682: 20x18", "#229 @ 101,717: 28x17", "#230 @ 284,40: 11x10", "#231 @ 454,521: 22x12", "#232 @ 642,889: 24x26", "#233 @ 49,378: 22x17", "#234 @ 474,15: 11x14", "#235 @ 292,921: 22x10", "#236 @ 747,868: 21x19", "#237 @ 759,202: 23x25", "#238 @ 647,580: 14x15", "#239 @ 664,68: 28x12", "#240 @ 693,240: 11x29", "#241 @ 897,678: 24x14", "#242 @ 456,510: 23x16", "#243 @ 173,780: 20x20", "#244 @ 409,480: 28x19", "#245 @ 10,294: 10x11", "#246 @ 250,253: 15x25", "#247 @ 613,82: 28x28", "#248 @ 660,431: 22x15", "#249 @ 825,116: 28x25", "#250 @ 938,705: 11x14", "#251 @ 663,480: 28x23", "#252 @ 360,133: 18x26", "#253 @ 437,122: 20x23", "#254 @ 702,186: 29x12", "#255 @ 61,618: 26x28", "#256 @ 696,614: 11x13", "#257 @ 12,509: 11x15", "#258 @ 210,968: 13x29", "#259 @ 471,544: 18x14", "#260 @ 786,514: 19x12", "#261 @ 824,188: 17x27", "#262 @ 959,328: 29x28", "#263 @ 741,723: 23x19", "#264 @ 55,488: 25x11", "#265 @ 669,239: 27x28", "#266 @ 622,488: 23x23", "#267 @ 161,94: 13x20", "#268 @ 920,184: 26x17", "#269 @ 560,109: 21x15", "#270 @ 265,816: 25x14", "#271 @ 404,128: 23x22", "#272 @ 26,698: 22x24", "#273 @ 973,708: 15x25", "#274 @ 53,236: 24x22", "#275 @ 966,982: 21x17", "#276 @ 869,534: 22x12", "#277 @ 7,695: 22x22", "#278 @ 460,464: 17x15", "#279 @ 692,102: 28x12", "#280 @ 714,598: 11x23", "#281 @ 281,717: 16x24", "#282 @ 944,238: 11x20", "#283 @ 653,608: 11x16", "#284 @ 898,584: 29x18", "#285 @ 900,320: 12x27", "#286 @ 14,2: 19x21", "#287 @ 778,915: 24x13", "#288 @ 50,894: 20x22", "#289 @ 754,340: 19x11", "#290 @ 928,951: 17x23", "#291 @ 773,969: 7x13", "#292 @ 916,437: 19x24", "#293 @ 494,287: 29x22", "#294 @ 498,30: 19x23", "#295 @ 50,75: 27x20", "#296 @ 740,348: 20x21", "#297 @ 33,81: 17x24", "#298 @ 848,94: 10x23", "#299 @ 404,310: 23x29", "#300 @ 517,578: 19x21", "#301 @ 218,935: 24x17", "#302 @ 831,575: 17x24", "#303 @ 124,915: 27x23", "#304 @ 871,785: 15x21", "#305 @ 580,125: 23x19", "#306 @ 241,193: 28x16", "#307 @ 871,777: 12x22", "#308 @ 781,32: 28x10", "#309 @ 533,80: 17x27", "#310 @ 255,330: 24x20", "#311 @ 771,967: 17x18", "#312 @ 356,648: 11x26", "#313 @ 626,839: 23x10", "#314 @ 335,414: 12x14", "#315 @ 143,713: 29x26", "#316 @ 53,422: 21x14", "#317 @ 64,27: 11x29", "#318 @ 74,708: 28x20", "#319 @ 790,7: 16x24", "#320 @ 347,733: 29x27", "#321 @ 732,784: 16x24", "#322 @ 4,662: 28x16", "#323 @ 715,610: 15x22", "#324 @ 868,225: 17x19", "#325 @ 722,357: 15x14", "#326 @ 60,107: 20x24", "#327 @ 513,68: 29x28", "#328 @ 447,664: 24x23", "#329 @ 194,177: 19x26", "#330 @ 95,759: 19x10", "#331 @ 781,646: 20x21", "#332 @ 36,350: 22x17", "#333 @ 953,956: 14x22", "#334 @ 599,658: 25x24", "#335 @ 108,766: 11x17", "#336 @ 776,37: 15x24", "#337 @ 272,392: 22x29", "#338 @ 70,698: 25x17", "#339 @ 817,614: 12x22", "#340 @ 834,588: 12x27", "#341 @ 248,531: 24x13", "#342 @ 290,556: 28x24", "#343 @ 358,408: 27x13", "#344 @ 325,375: 27x20", "#345 @ 408,463: 12x24", "#346 @ 823,113: 14x20", "#347 @ 874,327: 29x10", "#348 @ 513,334: 23x28", "#349 @ 864,784: 29x27", "#350 @ 355,767: 21x11", "#351 @ 878,882: 16x11", "#352 @ 608,439: 19x26", "#353 @ 672,356: 26x26", "#354 @ 173,255: 26x25", "#355 @ 433,141: 24x20", "#356 @ 652,765: 17x23", "#357 @ 327,506: 16x24", "#358 @ 967,231: 16x29", "#359 @ 70,770: 28x12", "#360 @ 545,44: 10x23", "#361 @ 350,386: 20x27", "#362 @ 538,653: 22x21", "#363 @ 592,936: 18x17", "#364 @ 847,817: 23x22", "#365 @ 725,750: 20x25", "#366 @ 151,695: 29x26", "#367 @ 742,41: 26x14", "#368 @ 481,865: 26x20", "#369 @ 520,189: 26x10", "#370 @ 487,394: 16x17", "#371 @ 220,156: 12x22", "#372 @ 880,885: 26x28", "#373 @ 727,483: 13x14", "#374 @ 608,360: 11x16", "#375 @ 750,620: 29x14", "#376 @ 697,955: 20x16", "#377 @ 239,347: 16x26", "#378 @ 803,205: 15x22", "#379 @ 60,287: 24x17", "#380 @ 73,626: 15x22", "#381 @ 919,704: 12x28", "#382 @ 660,734: 16x22", "#383 @ 741,259: 27x29", "#384 @ 519,458: 19x15", "#385 @ 269,283: 27x12", "#386 @ 583,714: 18x12", "#387 @ 84,663: 16x10", "#388 @ 351,225: 26x13", "#389 @ 549,729: 20x13", "#390 @ 9,454: 16x12", "#391 @ 959,646: 11x24", "#392 @ 531,979: 20x18", "#393 @ 80,134: 20x3", "#394 @ 894,906: 15x26", "#395 @ 19,174: 29x11", "#396 @ 46,585: 12x17", "#397 @ 206,818: 10x25", "#398 @ 796,705: 26x14", "#399 @ 544,362: 15x18", "#400 @ 544,78: 12x29", "#401 @ 307,826: 18x20", "#402 @ 911,549: 23x18", "#403 @ 608,528: 14x28", "#404 @ 315,729: 24x24", "#405 @ 654,207: 27x11", "#406 @ 922,20: 14x13", "#407 @ 959,331: 13x21", "#408 @ 635,553: 27x25", "#409 @ 943,476: 25x22", "#410 @ 831,103: 27x27", "#411 @ 821,951: 14x28", "#412 @ 685,320: 16x13", "#413 @ 1,596: 10x21", "#414 @ 878,279: 19x19", "#415 @ 584,621: 21x14", "#416 @ 922,937: 17x17", "#417 @ 343,750: 26x21", "#418 @ 805,24: 20x15", "#419 @ 719,852: 15x13", "#420 @ 606,430: 17x23", "#421 @ 726,355: 20x22", "#422 @ 779,895: 10x22", "#423 @ 652,729: 18x19", "#424 @ 106,867: 24x22", "#425 @ 17,520: 11x11", "#426 @ 145,374: 28x12", "#427 @ 129,294: 16x16", "#428 @ 586,813: 13x17", "#429 @ 194,535: 10x24", "#430 @ 836,175: 17x15", "#431 @ 184,785: 29x10", "#432 @ 926,6: 26x19", "#433 @ 606,348: 15x20", "#434 @ 169,151: 17x19", "#435 @ 104,100: 13x29", "#436 @ 13,282: 15x20", "#437 @ 664,724: 11x29", "#438 @ 822,484: 13x11", "#439 @ 938,274: 28x18", "#440 @ 134,845: 19x16", "#441 @ 517,445: 19x26", "#442 @ 622,646: 12x26", "#443 @ 504,360: 26x25", "#444 @ 492,429: 21x10", "#445 @ 122,726: 10x12", "#446 @ 198,558: 11x11", "#447 @ 712,213: 12x19", "#448 @ 830,590: 16x14", "#449 @ 607,380: 13x16", "#450 @ 56,925: 25x20", "#451 @ 459,135: 14x21", "#452 @ 850,330: 23x28", "#453 @ 854,149: 19x14", "#454 @ 881,538: 13x27", "#455 @ 328,99: 23x20", "#456 @ 246,243: 13x20", "#457 @ 655,372: 10x29", "#458 @ 493,733: 27x23", "#459 @ 12,969: 28x16", "#460 @ 57,763: 16x15", "#461 @ 46,965: 17x14", "#462 @ 768,946: 13x20", "#463 @ 0,874: 23x14", "#464 @ 218,950: 18x15", "#465 @ 341,623: 20x15", "#466 @ 911,94: 10x17", "#467 @ 485,376: 26x24", "#468 @ 977,640: 10x8", "#469 @ 971,848: 10x11", "#470 @ 889,214: 15x17", "#471 @ 206,337: 14x12", "#472 @ 4,450: 25x29", "#473 @ 21,288: 12x18", "#474 @ 959,1: 25x10", "#475 @ 113,905: 17x25", "#476 @ 325,830: 17x12", "#477 @ 973,142: 26x27", "#478 @ 330,599: 10x25", "#479 @ 840,838: 28x23", "#480 @ 489,682: 28x12", "#481 @ 567,199: 23x12", "#482 @ 504,278: 29x13", "#483 @ 816,171: 17x25", "#484 @ 98,509: 13x21", "#485 @ 664,352: 20x18", "#486 @ 313,922: 28x16", "#487 @ 756,923: 16x19", "#488 @ 238,90: 29x14", "#489 @ 428,164: 14x13", "#490 @ 213,951: 16x24", "#491 @ 796,516: 12x17", "#492 @ 954,611: 26x17", "#493 @ 356,653: 20x12", "#494 @ 863,236: 15x12", "#495 @ 772,23: 26x16", "#496 @ 4,870: 14x29", "#497 @ 457,679: 28x12", "#498 @ 94,298: 27x23", "#499 @ 388,801: 22x22", "#500 @ 226,73: 29x23", "#501 @ 417,914: 29x17", "#502 @ 89,601: 28x14", "#503 @ 881,222: 13x19", "#504 @ 281,448: 18x23", "#505 @ 157,111: 25x10", "#506 @ 719,452: 13x28", "#507 @ 823,893: 27x23", "#508 @ 294,426: 14x10", "#509 @ 166,804: 21x12", "#510 @ 829,366: 24x23", "#511 @ 124,757: 17x12", "#512 @ 654,768: 10x15", "#513 @ 900,25: 11x24", "#514 @ 518,201: 19x15", "#515 @ 172,486: 13x27", "#516 @ 292,54: 22x12", "#517 @ 706,554: 22x16", "#518 @ 785,653: 19x10", "#519 @ 815,597: 14x24", "#520 @ 682,622: 29x26", "#521 @ 145,434: 12x24", "#522 @ 778,898: 22x25", "#523 @ 667,191: 10x15", "#524 @ 195,697: 27x17", "#525 @ 297,615: 4x14", "#526 @ 792,582: 26x19", "#527 @ 306,483: 13x20", "#528 @ 108,835: 28x11", "#529 @ 143,190: 26x25", "#530 @ 866,794: 11x17", "#531 @ 405,71: 20x26", "#532 @ 511,229: 28x29", "#533 @ 746,288: 28x25", "#534 @ 525,194: 13x14", "#535 @ 412,459: 15x18", "#536 @ 43,977: 13x18", "#537 @ 169,896: 9x9", "#538 @ 8,706: 13x25", "#539 @ 66,154: 8x10", "#540 @ 59,380: 27x22", "#541 @ 961,973: 17x20", "#542 @ 820,448: 21x16", "#543 @ 871,887: 14x13", "#544 @ 867,352: 24x14", "#545 @ 871,210: 10x23", "#546 @ 232,550: 28x13", "#547 @ 47,162: 24x20", "#548 @ 887,346: 29x25", "#549 @ 884,23: 21x13", "#550 @ 138,61: 24x11", "#551 @ 236,323: 22x16", "#552 @ 156,248: 17x24", "#553 @ 541,716: 27x13", "#554 @ 479,136: 11x24", "#555 @ 887,527: 20x23", "#556 @ 265,338: 27x25", "#557 @ 198,911: 24x20", "#558 @ 763,640: 24x28", "#559 @ 463,827: 13x25", "#560 @ 909,445: 11x29", "#561 @ 744,854: 17x23", "#562 @ 959,637: 12x24", "#563 @ 288,310: 14x22", "#564 @ 836,16: 28x22", "#565 @ 120,234: 28x24", "#566 @ 935,441: 19x13", "#567 @ 421,529: 26x24", "#568 @ 392,812: 23x18", "#569 @ 765,872: 27x25", "#570 @ 902,523: 25x18", "#571 @ 494,751: 10x26", "#572 @ 15,838: 29x14", "#573 @ 159,752: 19x28", "#574 @ 941,756: 15x24", "#575 @ 916,524: 11x25", "#576 @ 350,56: 15x20", "#577 @ 487,156: 20x19", "#578 @ 269,597: 20x11", "#579 @ 525,559: 18x26", "#580 @ 107,610: 20x14", "#581 @ 64,909: 20x27", "#582 @ 410,681: 19x25", "#583 @ 126,171: 11x18", "#584 @ 206,158: 20x25", "#585 @ 338,926: 22x28", "#586 @ 662,78: 22x16", "#587 @ 229,215: 28x28", "#588 @ 919,720: 11x12", "#589 @ 793,881: 17x22", "#590 @ 762,806: 27x17", "#591 @ 0,587: 19x15", "#592 @ 456,83: 15x11", "#593 @ 299,165: 25x27", "#594 @ 209,610: 19x11", "#595 @ 8,520: 15x27", "#596 @ 91,698: 14x22", "#597 @ 229,950: 16x25", "#598 @ 414,465: 19x21", "#599 @ 355,519: 25x29", "#600 @ 331,725: 11x23", "#601 @ 783,961: 21x10", "#602 @ 681,921: 19x24", "#603 @ 697,306: 17x16", "#604 @ 807,316: 10x25", "#605 @ 957,155: 27x25", "#606 @ 748,750: 12x19", "#607 @ 374,209: 16x11", "#608 @ 290,708: 29x17", "#609 @ 591,775: 12x20", "#610 @ 374,625: 21x21", "#611 @ 110,200: 19x23", "#612 @ 925,299: 24x19", "#613 @ 935,826: 28x21", "#614 @ 164,481: 27x20", "#615 @ 535,282: 14x7", "#616 @ 867,189: 24x26", "#617 @ 700,876: 20x16", "#618 @ 465,33: 18x15", "#619 @ 672,258: 10x21", "#620 @ 666,548: 16x15", "#621 @ 830,141: 12x23", "#622 @ 985,246: 11x29", "#623 @ 494,971: 27x22", "#624 @ 666,921: 19x14", "#625 @ 254,374: 26x17", "#626 @ 141,708: 14x19", "#627 @ 685,830: 12x11", "#628 @ 53,922: 21x29", "#629 @ 192,553: 26x28", "#630 @ 367,153: 29x20", "#631 @ 742,937: 21x14", "#632 @ 123,661: 14x22", "#633 @ 723,295: 27x19", "#634 @ 49,682: 29x24", "#635 @ 556,718: 28x22", "#636 @ 281,533: 12x13", "#637 @ 943,310: 19x20", "#638 @ 837,394: 20x11", "#639 @ 297,41: 11x24", "#640 @ 585,722: 17x29", "#641 @ 7,841: 15x13", "#642 @ 92,710: 27x27", "#643 @ 54,22: 17x23", "#644 @ 952,785: 17x16", "#645 @ 32,975: 22x14", "#646 @ 974,680: 3x8", "#647 @ 605,709: 13x18", "#648 @ 805,629: 28x28", "#649 @ 517,313: 15x16", "#650 @ 528,330: 19x21", "#651 @ 547,51: 22x14", "#652 @ 807,787: 21x24", "#653 @ 773,592: 20x24", "#654 @ 1,97: 26x23", "#655 @ 353,53: 16x14", "#656 @ 441,578: 15x10", "#657 @ 36,677: 13x18", "#658 @ 782,61: 13x10", "#659 @ 648,88: 12x13", "#660 @ 3,413: 26x16", "#661 @ 280,979: 21x21", "#662 @ 234,860: 16x18", "#663 @ 568,961: 17x19", "#664 @ 740,437: 28x23", "#665 @ 545,85: 19x25", "#666 @ 295,612: 10x21", "#667 @ 657,218: 26x10", "#668 @ 161,154: 26x22", "#669 @ 11,945: 13x12", "#670 @ 185,528: 28x14", "#671 @ 746,943: 14x28", "#672 @ 321,950: 19x12", "#673 @ 689,30: 14x11", "#674 @ 934,241: 15x24", "#675 @ 309,401: 10x18", "#676 @ 956,49: 26x21", "#677 @ 895,82: 11x27", "#678 @ 557,138: 25x10", "#679 @ 950,841: 26x16", "#680 @ 761,462: 14x20", "#681 @ 657,162: 12x14", "#682 @ 762,346: 20x12", "#683 @ 168,247: 14x18", "#684 @ 288,464: 15x15", "#685 @ 38,642: 12x23", "#686 @ 683,229: 25x17", "#687 @ 527,441: 23x21", "#688 @ 136,878: 16x15", "#689 @ 929,430: 18x24", "#690 @ 435,575: 29x26", "#691 @ 705,385: 21x23", "#692 @ 204,319: 21x29", "#693 @ 331,394: 14x29", "#694 @ 377,625: 16x12", "#695 @ 105,286: 27x14", "#696 @ 253,276: 24x24", "#697 @ 773,811: 22x26", "#698 @ 112,417: 12x21", "#699 @ 666,593: 21x19", "#700 @ 817,366: 10x13", "#701 @ 90,733: 24x29", "#702 @ 538,209: 10x15", "#703 @ 860,522: 27x20", "#704 @ 31,503: 28x14", "#705 @ 219,350: 27x24", "#706 @ 335,726: 18x21", "#707 @ 42,589: 13x12", "#708 @ 937,601: 23x23", "#709 @ 868,846: 18x16", "#710 @ 487,765: 13x20", "#711 @ 637,887: 19x12", "#712 @ 773,53: 14x12", "#713 @ 179,908: 22x25", "#714 @ 29,657: 14x18", "#715 @ 670,79: 18x28", "#716 @ 15,517: 15x22", "#717 @ 254,192: 20x22", "#718 @ 771,419: 18x18", "#719 @ 92,110: 20x24", "#720 @ 950,348: 24x13", "#721 @ 439,232: 19x29", "#722 @ 506,964: 10x16", "#723 @ 493,675: 29x28", "#724 @ 736,579: 15x14", "#725 @ 511,301: 17x13", "#726 @ 198,956: 11x15", "#727 @ 365,505: 15x14", "#728 @ 252,335: 15x23", "#729 @ 499,35: 15x12", "#730 @ 568,402: 27x16", "#731 @ 792,21: 18x12", "#732 @ 272,672: 12x26", "#733 @ 205,984: 14x12", "#734 @ 187,51: 17x25", "#735 @ 598,450: 21x24", "#736 @ 36,865: 19x27", "#737 @ 944,650: 24x13", "#738 @ 594,120: 21x22", "#739 @ 878,630: 26x13", "#740 @ 657,370: 12x12", "#741 @ 456,437: 14x25", "#742 @ 337,631: 19x27", "#743 @ 874,665: 14x13", "#744 @ 367,372: 27x24", "#745 @ 906,711: 27x20", "#746 @ 124,418: 27x20", "#747 @ 581,281: 27x27", "#748 @ 152,695: 14x28", "#749 @ 920,533: 21x15", "#750 @ 630,50: 11x16", "#751 @ 679,277: 29x21", "#752 @ 970,763: 22x18", "#753 @ 368,367: 28x22", "#754 @ 851,844: 15x22", "#755 @ 342,42: 25x20", "#756 @ 252,284: 11x11", "#757 @ 509,656: 22x24", "#758 @ 976,838: 22x16", "#759 @ 46,408: 28x19", "#760 @ 446,37: 10x29", "#761 @ 649,894: 20x23", "#762 @ 857,136: 20x19", "#763 @ 475,297: 24x25", "#764 @ 78,132: 25x10", "#765 @ 244,868: 10x13", "#766 @ 869,202: 12x11", "#767 @ 471,669: 23x10", "#768 @ 665,166: 18x29", "#769 @ 65,248: 28x22", "#770 @ 470,265: 14x21", "#771 @ 734,62: 26x12", "#772 @ 360,766: 29x26", "#773 @ 759,457: 27x15", "#774 @ 700,650: 24x15", "#775 @ 666,363: 13x12", "#776 @ 755,24: 14x16", "#777 @ 777,614: 28x10", "#778 @ 176,589: 25x19", "#779 @ 934,671: 13x29", "#780 @ 291,49: 12x15", "#781 @ 934,36: 27x19", "#782 @ 74,471: 17x10", "#783 @ 949,478: 5x13", "#784 @ 798,458: 28x27", "#785 @ 203,970: 22x11", "#786 @ 948,418: 28x27", "#787 @ 230,520: 22x11", "#788 @ 80,642: 10x10", "#789 @ 840,910: 18x28", "#790 @ 742,544: 17x10", "#791 @ 685,303: 13x23", "#792 @ 968,702: 15x27", "#793 @ 93,188: 21x12", "#794 @ 333,602: 20x20", "#795 @ 519,574: 28x22", "#796 @ 6,405: 14x19", "#797 @ 279,438: 13x16", "#798 @ 973,846: 12x29", "#799 @ 325,718: 22x18", "#800 @ 325,949: 14x10", "#801 @ 645,374: 19x15", "#802 @ 763,332: 25x15", "#803 @ 720,452: 27x26", "#804 @ 815,717: 21x28", "#805 @ 755,3: 13x26", "#806 @ 487,678: 29x24", "#807 @ 127,501: 22x24", "#808 @ 735,123: 16x20", "#809 @ 245,924: 10x20", "#810 @ 92,566: 26x17", "#811 @ 274,692: 15x17", "#812 @ 249,469: 27x16", "#813 @ 61,152: 23x17", "#814 @ 299,827: 27x21", "#815 @ 76,191: 26x12", "#816 @ 673,447: 19x27", "#817 @ 312,131: 12x15", "#818 @ 143,235: 17x27", "#819 @ 57,258: 23x11", "#820 @ 357,405: 14x20", "#821 @ 858,751: 16x15", "#822 @ 978,870: 11x20", "#823 @ 916,221: 21x20", "#824 @ 467,6: 29x14", "#825 @ 757,946: 17x24", "#826 @ 604,100: 21x27", "#827 @ 734,112: 16x24", "#828 @ 816,365: 14x10", "#829 @ 303,800: 16x27", "#830 @ 453,144: 16x19", "#831 @ 782,955: 10x18", "#832 @ 442,658: 14x18", "#833 @ 804,427: 21x27", "#834 @ 328,450: 10x20", "#835 @ 728,48: 23x18", "#836 @ 683,625: 20x27", "#837 @ 598,129: 15x25", "#838 @ 191,59: 6x8", "#839 @ 532,153: 11x19", "#840 @ 637,837: 11x14", "#841 @ 746,290: 11x23", "#842 @ 856,11: 22x13", "#843 @ 617,53: 16x23", "#844 @ 76,241: 16x16", "#845 @ 582,723: 18x13", "#846 @ 848,841: 29x20", "#847 @ 20,458: 16x22", "#848 @ 663,194: 15x16", "#849 @ 573,115: 25x14", "#850 @ 742,278: 22x19", "#851 @ 218,326: 24x24", "#852 @ 319,375: 27x10", "#853 @ 694,531: 28x12", "#854 @ 210,371: 13x25", "#855 @ 539,244: 16x16", "#856 @ 912,538: 22x14", "#857 @ 3,321: 26x16", "#858 @ 540,143: 28x25", "#859 @ 857,523: 23x26", "#860 @ 533,280: 22x12", "#861 @ 344,824: 8x9", "#862 @ 922,957: 28x20", "#863 @ 649,451: 27x28", "#864 @ 287,498: 22x12", "#865 @ 106,613: 26x11", "#866 @ 815,614: 10x13", "#867 @ 548,961: 15x27", "#868 @ 872,343: 24x18", "#869 @ 72,374: 12x28", "#870 @ 634,588: 11x21", "#871 @ 744,866: 19x10", "#872 @ 84,466: 11x28", "#873 @ 655,185: 17x14", "#874 @ 311,124: 15x10", "#875 @ 814,190: 12x15", "#876 @ 885,660: 17x14", "#877 @ 750,580: 12x29", "#878 @ 211,306: 4x4", "#879 @ 137,60: 18x29", "#880 @ 433,934: 14x15", "#881 @ 757,343: 18x18", "#882 @ 847,839: 23x11", "#883 @ 3,943: 22x22", "#884 @ 847,750: 15x18", "#885 @ 167,894: 18x16", "#886 @ 909,872: 13x15", "#887 @ 747,534: 27x12", "#888 @ 961,5: 22x10", "#889 @ 919,651: 24x10", "#890 @ 925,714: 18x11", "#891 @ 51,468: 18x24", "#892 @ 242,471: 24x21", "#893 @ 590,324: 12x24", "#894 @ 46,300: 20x18", "#895 @ 658,467: 19x22", "#896 @ 769,397: 18x15", "#897 @ 100,511: 16x24", "#898 @ 633,49: 24x15", "#899 @ 752,621: 12x19", "#900 @ 380,362: 16x12", "#901 @ 746,586: 19x18", "#902 @ 236,138: 27x16", "#903 @ 958,875: 22x25", "#904 @ 366,753: 12x23", "#905 @ 916,876: 13x23", "#906 @ 214,565: 24x17", "#907 @ 45,30: 23x27", "#908 @ 390,947: 24x15", "#909 @ 933,270: 10x10", "#910 @ 125,833: 26x21", "#911 @ 104,186: 18x10", "#912 @ 576,66: 23x26", "#913 @ 798,9: 4x19", "#914 @ 406,817: 16x11", "#915 @ 893,341: 29x20", "#916 @ 62,652: 26x17", "#917 @ 666,807: 29x29", "#918 @ 757,760: 23x12", "#919 @ 584,359: 16x22", "#920 @ 68,927: 10x14", "#921 @ 939,417: 27x28", "#922 @ 60,510: 16x24", "#923 @ 472,114: 25x15", "#924 @ 497,502: 21x25", "#925 @ 933,958: 22x23", "#926 @ 212,631: 28x21", "#927 @ 781,299: 12x28", "#928 @ 304,51: 26x18", "#929 @ 411,819: 6x3", "#930 @ 341,760: 17x14", "#931 @ 73,242: 26x29", "#932 @ 350,574: 17x11", "#933 @ 320,373: 22x28", "#934 @ 932,814: 29x21", "#935 @ 692,679: 21x13", "#936 @ 670,431: 16x16", "#937 @ 448,905: 22x16", "#938 @ 68,235: 22x17", "#939 @ 282,524: 12x19", "#940 @ 268,692: 10x22", "#941 @ 612,72: 10x25", "#942 @ 476,47: 27x20", "#943 @ 387,78: 13x27", "#944 @ 337,910: 25x16", "#945 @ 322,504: 10x21", "#946 @ 96,828: 20x11", "#947 @ 245,942: 16x28", "#948 @ 433,283: 11x25", "#949 @ 926,639: 22x19", "#950 @ 277,494: 27x27", "#951 @ 875,882: 18x22", "#952 @ 173,237: 11x25", "#953 @ 974,216: 23x26", "#954 @ 648,574: 12x24", "#955 @ 91,189: 16x13", "#956 @ 175,598: 24x17", "#957 @ 221,238: 13x11", "#958 @ 685,40: 27x15", "#959 @ 736,40: 29x21", "#960 @ 973,829: 13x25", "#961 @ 826,364: 29x11", "#962 @ 270,379: 10x22", "#963 @ 277,302: 24x21", "#964 @ 721,333: 28x16", "#965 @ 272,740: 16x12", "#966 @ 209,304: 11x12", "#967 @ 546,653: 22x18", "#968 @ 306,636: 14x29", "#969 @ 925,705: 15x29", "#970 @ 121,594: 21x22", "#971 @ 313,455: 18x26", "#972 @ 64,630: 12x25", "#973 @ 909,169: 21x16", "#974 @ 843,60: 20x10", "#975 @ 754,541: 22x13", "#976 @ 877,875: 15x11", "#977 @ 502,560: 19x22", "#978 @ 717,201: 18x17", "#979 @ 873,743: 27x21", "#980 @ 798,564: 16x10", "#981 @ 597,614: 16x18", "#982 @ 421,4: 27x21", "#983 @ 401,146: 10x11", "#984 @ 338,282: 27x19", "#985 @ 206,607: 12x19", "#986 @ 867,355: 11x15", "#987 @ 947,380: 29x24", "#988 @ 200,773: 17x14", "#989 @ 494,277: 20x13", "#990 @ 47,349: 18x13", "#991 @ 790,613: 10x13", "#992 @ 292,484: 29x15", "#993 @ 177,756: 29x23", "#994 @ 115,93: 15x17", "#995 @ 597,66: 10x24", "#996 @ 234,529: 29x12", "#997 @ 494,488: 12x25", "#998 @ 668,90: 11x20", "#999 @ 824,963: 26x14", "#1000 @ 101,714: 18x19", "#1001 @ 32,661: 18x20", "#1002 @ 311,667: 22x17", "#1003 @ 362,276: 19x15", "#1004 @ 25,815: 15x25", "#1005 @ 234,309: 23x15", "#1006 @ 632,54: 11x14", "#1007 @ 960,967: 20x23", "#1008 @ 386,711: 18x10", "#1009 @ 391,82: 28x16", "#1010 @ 175,918: 18x7", "#1011 @ 681,376: 25x23", "#1012 @ 149,735: 13x11", "#1013 @ 902,656: 25x23", "#1014 @ 414,619: 14x17", "#1015 @ 115,306: 25x10", "#1016 @ 588,36: 19x14", "#1017 @ 590,25: 26x16", "#1018 @ 609,371: 28x18", "#1019 @ 731,23: 27x20", "#1020 @ 307,567: 11x12", "#1021 @ 333,615: 28x17", "#1022 @ 226,260: 28x27", "#1023 @ 695,49: 20x24", "#1024 @ 435,447: 18x22", "#1025 @ 968,692: 23x19", "#1026 @ 962,215: 13x23", "#1027 @ 119,468: 10x23", "#1028 @ 310,579: 12x12", "#1029 @ 749,85: 17x23", "#1030 @ 862,196: 13x21", "#1031 @ 671,22: 29x12", "#1032 @ 937,806: 21x23", "#1033 @ 68,91: 17x25", "#1034 @ 967,651: 11x13", "#1035 @ 96,569: 28x19", "#1036 @ 634,717: 29x27", "#1037 @ 173,538: 22x13", "#1038 @ 957,333: 25x16", "#1039 @ 459,443: 27x23", "#1040 @ 102,183: 10x26", "#1041 @ 612,877: 29x13", "#1042 @ 862,622: 21x21", "#1043 @ 980,940: 19x10", "#1044 @ 154,271: 29x27", "#1045 @ 379,833: 26x14", "#1046 @ 983,798: 10x29", "#1047 @ 485,730: 28x11", "#1048 @ 270,305: 21x27", "#1049 @ 243,388: 22x14", "#1050 @ 873,327: 25x12", "#1051 @ 231,72: 19x14", "#1052 @ 639,582: 14x22", "#1053 @ 335,820: 23x19", "#1054 @ 130,711: 16x22", "#1055 @ 419,625: 5x3", "#1056 @ 687,817: 14x26", "#1057 @ 882,561: 11x25", "#1058 @ 766,291: 16x20", "#1059 @ 127,86: 15x11", "#1060 @ 869,851: 19x16", "#1061 @ 234,462: 11x27", "#1062 @ 196,829: 26x12", "#1063 @ 821,142: 23x10", "#1064 @ 276,964: 13x28", "#1065 @ 650,86: 20x13", "#1066 @ 84,162: 25x14", "#1067 @ 217,458: 23x12", "#1068 @ 538,719: 21x27", "#1069 @ 8,698: 11x26", "#1070 @ 754,521: 14x20", "#1071 @ 907,230: 24x12", "#1072 @ 888,287: 15x17", "#1073 @ 688,534: 27x17", "#1074 @ 678,215: 10x19", "#1075 @ 820,871: 10x14", "#1076 @ 949,433: 16x25", "#1077 @ 279,215: 14x10", "#1078 @ 41,80: 15x28", "#1079 @ 54,507: 15x25", "#1080 @ 14,835: 26x17", "#1081 @ 269,506: 29x17", "#1082 @ 275,745: 12x15", "#1083 @ 416,14: 10x13", "#1084 @ 530,338: 16x29", "#1085 @ 420,924: 19x17", "#1086 @ 807,212: 23x19", "#1087 @ 455,62: 26x26", "#1088 @ 683,84: 13x23", "#1089 @ 884,738: 26x21", "#1090 @ 720,834: 21x19", "#1091 @ 194,174: 20x16", "#1092 @ 240,528: 11x23", "#1093 @ 971,678: 11x13", "#1094 @ 584,783: 20x11", "#1095 @ 40,937: 24x23", "#1096 @ 776,430: 21x17", "#1097 @ 834,589: 17x28", "#1098 @ 465,321: 23x11", "#1099 @ 253,130: 14x25", "#1100 @ 129,611: 17x10", "#1101 @ 909,521: 26x27", "#1102 @ 401,944: 17x22", "#1103 @ 470,63: 16x24", "#1104 @ 616,651: 18x14", "#1105 @ 70,691: 16x20", "#1106 @ 412,470: 13x25", "#1107 @ 219,53: 23x28", "#1108 @ 875,876: 12x19", "#1109 @ 717,854: 11x27", "#1110 @ 249,637: 21x21", "#1111 @ 972,274: 18x18", "#1112 @ 657,495: 13x25", "#1113 @ 530,696: 22x29", "#1114 @ 137,107: 19x19", "#1115 @ 757,364: 15x20", "#1116 @ 936,834: 23x17", "#1117 @ 945,441: 27x18", "#1118 @ 137,454: 10x29", "#1119 @ 121,417: 19x16", "#1120 @ 631,107: 14x15", "#1121 @ 374,827: 18x24", "#1122 @ 451,802: 16x28", "#1123 @ 901,305: 22x23", "#1124 @ 935,330: 28x26", "#1125 @ 7,687: 11x15", "#1126 @ 631,494: 14x28", "#1127 @ 130,44: 16x29", "#1128 @ 713,945: 10x12", "#1129 @ 336,905: 18x29", "#1130 @ 234,298: 21x15", "#1131 @ 393,244: 18x25", "#1132 @ 217,448: 11x27", "#1133 @ 242,948: 10x22", "#1134 @ 516,148: 17x15", "#1135 @ 841,735: 16x29", "#1136 @ 986,923: 10x22", "#1137 @ 269,659: 13x19", "#1138 @ 237,851: 29x26", "#1139 @ 781,655: 16x19", "#1140 @ 522,350: 10x18", "#1141 @ 496,482: 18x16", "#1142 @ 945,8: 29x10", "#1143 @ 527,256: 28x24", "#1144 @ 292,224: 15x17", "#1145 @ 435,483: 28x24", "#1146 @ 854,613: 18x11", "#1147 @ 559,930: 17x16", "#1148 @ 442,247: 12x26", "#1149 @ 400,720: 15x25", "#1150 @ 59,651: 18x18", "#1151 @ 448,453: 12x15", "#1152 @ 257,978: 22x21", "#1153 @ 597,550: 24x11", "#1154 @ 529,448: 25x23", "#1155 @ 684,790: 27x29", "#1156 @ 565,390: 14x18", "#1157 @ 284,581: 15x23", "#1158 @ 961,338: 18x11", "#1159 @ 151,897: 20x18", "#1160 @ 11,656: 10x16", "#1161 @ 577,297: 24x19", "#1162 @ 132,101: 22x21", "#1163 @ 790,201: 25x14", "#1164 @ 883,736: 12x24", "#1165 @ 785,896: 18x27", "#1166 @ 528,270: 29x21", "#1167 @ 229,576: 22x28", "#1168 @ 376,838: 22x14", "#1169 @ 772,84: 19x27", "#1170 @ 465,903: 24x20", "#1171 @ 336,107: 24x20", "#1172 @ 282,807: 25x18", "#1173 @ 231,646: 15x14", "#1174 @ 247,468: 24x23", "#1175 @ 708,50: 25x22", "#1176 @ 121,472: 11x15", "#1177 @ 753,0: 23x11", "#1178 @ 669,255: 25x26", "#1179 @ 846,858: 21x26", "#1180 @ 720,113: 25x23", "#1181 @ 217,365: 19x25", "#1182 @ 964,449: 11x19", "#1183 @ 299,414: 11x19", "#1184 @ 258,668: 22x29", "#1185 @ 81,527: 29x28", "#1186 @ 420,893: 13x26", "#1187 @ 146,370: 23x25", "#1188 @ 708,462: 27x25", "#1189 @ 19,4: 10x8", "#1190 @ 126,851: 10x23", "#1191 @ 278,398: 21x12", "#1192 @ 668,550: 9x3", "#1193 @ 406,82: 13x12", "#1194 @ 792,696: 21x26", "#1195 @ 65,637: 10x13", "#1196 @ 753,180: 12x4", "#1197 @ 668,425: 15x26", "#1198 @ 526,749: 26x11", "#1199 @ 879,723: 29x21", "#1200 @ 451,291: 19x11", "#1201 @ 318,888: 21x17", "#1202 @ 359,491: 13x26", "#1203 @ 851,514: 11x26", "#1204 @ 711,183: 28x12", "#1205 @ 910,705: 10x15", "#1206 @ 952,951: 17x26", "#1207 @ 410,35: 23x21", "#1208 @ 164,517: 23x20", "#1209 @ 238,510: 15x24", "#1210 @ 179,40: 19x23", "#1211 @ 48,517: 25x20", "#1212 @ 157,627: 25x18", "#1213 @ 751,289: 19x10", "#1214 @ 495,43: 17x21", "#1215 @ 455,596: 10x13", "#1216 @ 183,253: 18x12", "#1217 @ 444,913: 28x23", "#1218 @ 560,687: 13x17", "#1219 @ 130,173: 10x15", "#1220 @ 916,132: 20x17", "#1221 @ 773,89: 6x6", "#1222 @ 732,809: 28x22", "#1223 @ 987,793: 11x12", "#1224 @ 373,495: 16x21", "#1225 @ 806,490: 29x19", "#1226 @ 771,623: 10x15", "#1227 @ 247,308: 16x28", "#1228 @ 280,413: 17x15", "#1229 @ 543,444: 17x14", "#1230 @ 835,926: 22x15", "#1231 @ 373,819: 21x18", "#1232 @ 191,810: 17x14", "#1233 @ 950,792: 11x18", "#1234 @ 427,280: 29x20", "#1235 @ 489,496: 26x20", "#1236 @ 931,173: 17x18", "#1237 @ 355,940: 11x17", "#1238 @ 467,463: 29x15", "#1239 @ 479,281: 28x25", "#1240 @ 979,710: 3x11", "#1241 @ 195,801: 18x24", "#1242 @ 34,345: 27x20", "#1243 @ 849,60: 14x15", "#1244 @ 45,112: 27x10", "#1245 @ 667,146: 18x26", "#1246 @ 699,319: 13x29", "#1247 @ 393,12: 18x25", "#1248 @ 428,295: 11x22", "#1249 @ 767,81: 17x27", "#1250 @ 893,82: 14x28", "#1251 @ 566,978: 13x12", "#1252 @ 769,373: 11x25", "#1253 @ 346,599: 13x17", "#1254 @ 139,325: 23x24", "#1255 @ 288,976: 11x20", "#1256 @ 602,70: 24x24", "#1257 @ 246,248: 12x21", "#1258 @ 911,598: 13x13", "#1259 @ 325,463: 15x16", "#1260 @ 348,904: 25x13", "#1261 @ 747,732: 20x23", "#1262 @ 231,571: 12x28", "#1263 @ 822,867: 14x12", "#1264 @ 385,141: 21x11", "#1265 @ 372,514: 25x21", "#1266 @ 170,644: 29x14", "#1267 @ 672,358: 27x26", "#1268 @ 224,341: 13x24", "#1269 @ 864,609: 23x26", "#1270 @ 322,455: 10x17", "#1271 @ 591,628: 21x14", "#1272 @ 448,282: 13x27", "#1273 @ 252,404: 22x17", "#1274 @ 172,908: 27x23", "#1275 @ 588,577: 11x28", "#1276 @ 744,178: 26x10", "#1277 @ 593,627: 28x15", "#1278 @ 424,621: 10x15", "#1279 @ 118,715: 22x17", "#1280 @ 388,490: 11x17", "#1281 @ 645,612: 16x15", "#1282 @ 45,620: 14x26", "#1283 @ 163,727: 10x29", "#1284 @ 418,656: 22x26", "#1285 @ 903,95: 25x29", "#1286 @ 161,810: 29x19", "#1287 @ 9,101: 23x21"];
//var v = ["#1 @ 146,196: 19x14"];
var i3;

for (i3 = 0; i3 < v.length; i3++) { 

var v2 = v[i3];
vx = v2.split('@ ')[1];
vx = vx.split(',')[0];
vy = v2.split(",")[1];
vy = vy.split(":")[0];
vw = v2.split(": ")[1];
vw = vw.split("x")[0];
vh = v2.split("x")[1];

var x = parseInt(vx);
var y = parseInt(vy);
var w = parseInt(vw);
var h = parseInt(vh);
var start
start = x + (y * size);

var i2;
for (i2 = 0; i2 < h; i2++) { 
    cell = start + (i2 * size);

var i;
for (i = 0; i < w; i++) { 
	ffs = cell + i;
	if (a[ffs] == 1) {
		a[ffs] = 2;
	} else if (a[ffs] == 2) {
		
	}
	else {
	a[ffs] = 1;
	}	
}
}
}

for (i3 = 0; i3 < v.length; i3++) { 

var v2 = v[i3];
vx = v2.split('@ ')[1];
vx = vx.split(',')[0];
vy = v2.split(",")[1];
vy = vy.split(":")[0];
vw = v2.split(": ")[1];
vw = vw.split("x")[0];
vh = v2.split("x")[1];

var x = parseInt(vx);
var y = parseInt(vy);
var w = parseInt(vw);
var h = parseInt(vh);
var start
start = x + (y * size);

var i2;
for (i2 = 0; i2 < h; i2++) { 
    cell = start + (i2 * size);

var i;
for (i = 0; i < w; i++) { 
	ffs = cell + i;
	
	if (a[ffs] == 1) {
		jo++;
	}
}
}

if (jo == (w * h)) {
	console.log("found " + v2);
				}
	else {
		jo = 0;
		}


}