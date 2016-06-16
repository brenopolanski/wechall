<?php
  $encodedSecret = "3d3d516343746d4d6d6c315669563362";

  // echo bin2hex(strrev(base64_encode($encodedSecret)));
  echo base64_decode(strrev(hex2bin($encodedSecret)));
  // $secret is => oubWYf2kBq
?>
