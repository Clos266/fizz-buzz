/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 *  */

import { ejecutarFizzBuzz } from './events.js';

document.getElementById("btn").addEventListener("click", ejecutarFizzBuzz);
