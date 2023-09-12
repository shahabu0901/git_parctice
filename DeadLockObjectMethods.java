package org.jsp.extend.threads.deadLock;

class ThreadOne extends Thread {
	String s1 = null;
	String s2 = null;
	public ThreadOne(String s1, String s2) {
		this.s1 = s1;
		this.s2 = s2;
	}
	@Override
	public void run() {
		System.out.println("th1 is Waiting to Lock " + s1);
		synchronized (s1) {
			System.out.println("th1 Locks " + s1);
			System.out.println("th1 Waiting to Lock " + s2);
			try {
				s1.wait();
				System.out.println("Resume");
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			synchronized (s2) {
				System.out.println("th1 Lock " + s2);
			}
			System.out.println("th1 Unlocked " + s1);
			System.out.println("th1 Unlocked " + s2);
		}
	}
}
class ThreadTwo extends Thread {
	String s1 = null;
	String s2 = null;

	public ThreadTwo(String s1, String s2) {
		this.s1 = s1;
		this.s2 = s2;
	}
	@Override
	public void run() {
		System.out.println("th2 is Waiting Lock" + s2);
		synchronized (s2) {
			System.out.println("th2 is Lock " + s2);
			System.out.println("th2 Waiting to Lock" + s1);
			synchronized (s1) {
				System.out.println("th1 Locked" + s1);
				s1.notify();
			}
			System.out.println("th2 Unlocked " + s2);
			System.out.println("th2 Unlocked " + s1);
		}
	}
}
public class DeadLockObjectMethods {
	public static void main(String[] args) {
		String s1 = new String("Java");
		String s2 = new String("Programme");
		ThreadOne th1 = new ThreadOne(s1, s2);
		ThreadTwo th2 = new ThreadTwo(s1, s2);
		th1.start();
		th2.start();
	}
}
