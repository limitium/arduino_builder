#include <SoftwareSerial.h>// import the serial library

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("Serial setup done");
}

int i = 0;

void loop() {
  Serial.println("Loop: "+String(i++));
  delay(1000);
}
