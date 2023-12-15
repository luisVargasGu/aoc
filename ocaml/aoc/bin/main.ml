let file_path = "./bin/assets/personal.txt"

let find_first_and_last_digit str =
  let digits = ref [] in

  String.iter (fun c ->
    match c with
    | '0' .. '9' -> digits := c :: !digits
    | _ -> ()
  ) str;

 match !digits with
  | [] -> (Some '0', Some '0')
  | first :: rest ->
    (Some first, match List.rev rest with
                 | [] -> Some first 
                 | last_digit :: _ -> Some last_digit)

let rec read_lines ic =
  try
    let line = input_line ic in
    (* Example usage *)
    let (first, last) = find_first_and_last_digit line in
    match first, last with
    | Some first_digit, Some last_digit ->
      print_endline ("First digit: " ^ String.make 1 first_digit);
      print_endline ("Last digit: " ^ String.make 1 last_digit)
    | _, _ ->
      print_endline "No digit found";

      flush stdout;
      read_lines ic
  with End_of_file ->
    close_in ic

let run () =
  let ic = open_in file_path in
  read_lines ic

(* Example usage: run () *)
let () = run ()

