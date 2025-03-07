import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
  },
  title: {
    color: colors.red[900],
    fontSize: 22,
  },
  header: {
    paddingHorizontal: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 32,
    height: 38,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
    paddingBottom: 42,
    padding: 24
  },
  modalHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  modalCategory: {
    color: colors.gray[400],
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  modalLinkName: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.gray[200],
  },
  modalLinkUrl: {
    color: colors.gray[400],
    fontSize: 14,
  },
  modalFooter: {
    flexDirection: "row",
    marginTop: 32,
    width: "100%",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: colors.gray[600],
    paddingVertical: 14
  },
});