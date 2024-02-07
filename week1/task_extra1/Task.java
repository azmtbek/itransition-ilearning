package task_extra1;

class Task {
  public String name;
  Task(String name) {
    this.name = name;
  }
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

 