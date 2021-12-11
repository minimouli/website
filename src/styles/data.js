export const test = {
    "status": "success",
    "data": {
      "uuid": "4d3dba26-178f-4bbb-a48a-69e8e6722e35",
      "id": "-N8i_cD8x7bok9wA",
      "owner_uuid": "a1b838e7-461f-4c56-a4c2-e1b2734f948b",
      "project": {
        "name": "pushswap",
        "module": "CPE"
      },
      "suites": [
        {
          "name": "One",
          "tests": [
            {
              "name": "Positive",
              "status": "Status.SUCCESS",
              "duration": 21.99454099999275
            },
            {
              "name": "Negative",
              "status": "Status.SUCCESS",
              "duration": 16.28033300000243
            },
            {
              "name": "Zero",
              "status": "Status.SUCCESS",
              "duration": 16.169624999980442
            }
          ],
          "suites": []
        },
        {
          "name": "Sorted",
          "tests": [
            {
              "name": "Positive",
              "status": "Status.SUCCESS",
              "duration": 23.105332999955863
            },
            {
              "name": "Negative",
              "status": "Status.SUCCESS",
              "duration": 17.259957999922335
            },
            {
              "name": "Mixed",
              "status": "Status.SUCCESS",
              "duration": 18.025457999901846
            }
          ],
          "suites": []
        },
        {
          "name": "Small",
          "tests": [],
          "suites": [
            {
              "name": "Positive",
              "tests": [
                {
                  "name": "10",
                  "status": "Status.SUCCESS",
                  "duration": 20.34329200000502
                },
                {
                  "name": "50",
                  "status": "Status.SUCCESS",
                  "duration": 18.806499999947846
                },
                {
                  "name": "100",
                  "status": "Status.SUCCESS",
                  "duration": 22.07841700001154
                },
                {
                  "name": "500",
                  "status": "Status.SUCCESS",
                  "duration": 34.79629199998453
                }
              ],
              "suites": [
                  {
                  "name": "TEST",
                  "tests": [
                  {
                      "name" : "TEST",
                      "status": "lol",
                      "duration": 3.2
                  }
                ],
                "suites": [{
                    "name": "TEST2",
                    "tests": [
                        {
                            "name": "TEST2",
                            "status": "xd",
                            "duration": 3.2,
                        }
                    ],
                    "suites": [],
                },
                ],
                },
              ]
            },
            {
              "name": "Negative",
              "tests": [
                {
                  "name": "10",
                  "status": "Status.FAILURE",
                  "duration": 16.667084000073373,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-1571956072",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-1651714086",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                },
                {
                  "name": "50",
                  "status": "Status.FAILURE",
                  "duration": 16.220915999962017,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-762381752",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-2141409751",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                },
                {
                  "name": "100",
                  "status": "Status.FAILURE",
                  "duration": 16.007749999989755,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-1665334719",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-1948884483",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                },
                {
                  "name": "500",
                  "status": "Status.FAILURE",
                  "duration": 17.104833999997936,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-315473919",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-655790483",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                }
              ],
              "suites": []
            },
            {
              "name": "Mixed",
              "tests": [
                {
                  "name": "10",
                  "status": "Status.SUCCESS",
                  "duration": 16.47191700001713
                },
                {
                  "name": "50",
                  "status": "Status.SUCCESS",
                  "duration": 17.366082999971695
                },
                {
                  "name": "100",
                  "status": "Status.SUCCESS",
                  "duration": 18.624666000017896
                },
                {
                  "name": "500",
                  "status": "Status.SUCCESS",
                  "duration": 30.631958000012673
                }
              ],
              "suites": []
            }
          ]
        },
        {
          "name": "Medium",
          "tests": [],
          "suites": [
            {
              "name": "Positive",
              "tests": [
                {
                  "name": "1000",
                  "status": "Status.SUCCESS",
                  "duration": 57.68587500008289
                },
                {
                  "name": "2000",
                  "status": "Status.SUCCESS",
                  "duration": 101.34912500006612
                },
                {
                  "name": "5000",
                  "status": "Status.SUCCESS",
                  "duration": 378.9108749999432
                }
              ],
              "suites": []
            },
            {
              "name": "Negative",
              "tests": [
                {
                  "name": "1000",
                  "status": "Status.FAILURE",
                  "duration": 20.69066700001713,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-93580319",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-1894556002",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                },
                {
                  "name": "2000",
                  "status": "Status.FAILURE",
                  "duration": 23.630375000066124,
                  "hint": {
                    "type": "Hint.COMP",
                    "status": "Status.FAILURE",
                    "symbol": "<=",
                    "received": {
                      "value": "-146374990",
                      "type": "number"
                    },
                    "expected": {
                      "value": "-1334565947",
                      "type": "number"
                    },
                    "snippet": {
                      "arguments": {
                        "received": [
                          "received"
                        ],
                        "expected": [
                          "expected"
                        ]
                      },
                      "method": "toBeLessThanOrEqual"
                    }
                  }
                },
                {
                  "name": "5000",
                  "status": "Status.FAILURE",
                  "duration": 10.110874999896623,
                  "hint": {
                    "type": "Hint.TIMEOUT",
                    "status": "Status.FAILURE",
                    "category": "Category.TIMEOUT",
                    "timeout": 5
                  }
                }
              ],
              "suites": []
            },
            {
              "name": "Mixed",
              "tests": [
                {
                  "name": "1000",
                  "status": "Status.SUCCESS",
                  "duration": 47.5353340000147
                },
                {
                  "name": "2000",
                  "status": "Status.SUCCESS",
                  "duration": 100.75774999998976
                },
                {
                  "name": "5000",
                  "status": "Status.SUCCESS",
                  "duration": 393.05991599999834
                }
              ],
              "suites": []
            }
          ]
        }
      ],
      "creation_date": 1639229951,
      "duration": 1540
    }
  }