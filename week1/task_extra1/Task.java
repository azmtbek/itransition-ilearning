package task_extra1;

class Task {

  static {
    try {
      // process.exit(0);
      throw new Error("er");

    } catch (Error e) {
      System.out.println(e.getMessage());

    }
  }
  if(true)
  {
    return;
  }
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}

 